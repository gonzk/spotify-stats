import '../../App.css';
import React, {useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Home.css"
import Button from '../Button';
import Auth from '../Auth';
import Footer from '../Footer';

const USER_ENDPOINT = "https://api.spotify.com/v1/me/";

export default function Home() {
    useEffect(() => {
        Auth();
    }, []);
    
    const [data, setData] = useState({});
    const token = localStorage.getItem('accessToken');

    const getUserInfo = async () => {
        try {
            const response = await axios.get(USER_ENDPOINT, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            setData(response.data)
            return response.data;
        } catch (error) {
            window.location = "/";
        };
    }

    useEffect(() => {
        getUserInfo();
    }, []);
    
    return (
        <>
        <div className="container">
                <h1 className="hello">Hello {data.display_name}!</h1>
                <p className="home-description">Choose one of the following to see your stats</p>
                <div className="button-container">
                    <ul className="button__items">
                        <Button path="/top-tracks"  title="Top Tracks"></Button>
                        <Button path="/top-artists" title="Top Artists"></Button>
                        <Button path="/recently-played" title="Recently Played"></Button>
                    </ul>
                </div>
                
        </div>
        <Footer />
        </>
    );
}