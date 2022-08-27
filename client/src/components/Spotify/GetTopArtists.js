import React, { useState, useEffect } from "react";
import StatsButton from '../StatsButton';
import axios from "axios";
import CardItem from "../CardItem";
import Footer from "../Footer";

// "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
const ENDPOINT = "https://api.spotify.com/v1/me/top/artists";

function GetTopArtists() {
    const [data, setData] = useState({});
    const [timeRange, setTimeRange] = useState("last 4 weeks")

    const token = localStorage.getItem('accessToken');

    const getTopArtists = async (range) => {
        if (range === "short_term")
            setTimeRange("last 4 weeks");
        if (range === "medium_term")
            setTimeRange("last 6 months");
        if (range === "long_term")
            setTimeRange("all time");

        const url = `${ENDPOINT}?time_range=${range}&limit=50&offset=0`
        try {
            const response = await axios.get(url, {
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
        getTopArtists("short_term");
    }, []);

    return (
        <>
            <div className="container">
                <div className="top-artists-container">
                    <div className="title" >
                        <h1>Top Artists - {timeRange} </h1>
                    </div>
                    <div className="stats__wrapper">
                        <ul className="stats-buttons">
                            <StatsButton title="last 4 weeks" onClick={() => {getTopArtists("short_term")}}></StatsButton>
                            <StatsButton title="last 6 months" onClick={() => {getTopArtists("medium_term")}}></StatsButton>
                            <StatsButton title="all time" onClick={() => {getTopArtists("long_term")}}></StatsButton>
                        </ul>
                    </div>
                    <div className="data__table__artists">
                        <ul className="artists">
                            {data?.items ? data.items.map((item, index) =>
                                <CardItem key={`${item.id} + ${index}`} img={item.images[2].url} idx={index + 1}
                                    artist={item.name} path={item.external_urls.spotify}></CardItem>) : null}
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default GetTopArtists;