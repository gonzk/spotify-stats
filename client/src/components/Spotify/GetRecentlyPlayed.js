import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "../TableRow";
import  "../styles/SpotifyInfo.css"
import Footer from "../Footer";

const ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=50";

function GetRecentlyPlayed() {
    const [data, setData] = useState({});

    const token = localStorage.getItem('accessToken');

    const getRecentlyPlayed = async () => {
        const url = `${ENDPOINT}`
        try {
            const response = await axios.get(ENDPOINT, {
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
        getRecentlyPlayed();
    }, []);

    return (
        <>
            <div className="container">
                <div className="recently-played-container">
                    <div className="title" >
                        <h1>Recently Played</h1>
                    </div>
                    <div className="data__table data__table__recent">
                        <div className="grid grid__recent">
                            {data?.items ? data.items.map((item) =>
                                <TableRow key={`${item.played_at} + ${item.track.uri}`} img={item.track.album.images[2].url} name={item.track.name}
                                    artist={item.track.artists[0].name} time={item.played_at} url={item.track.external_urls.spotify}></TableRow>) : null}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )

}

export default GetRecentlyPlayed;