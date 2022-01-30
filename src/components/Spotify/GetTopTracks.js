import React, { useState, useEffect } from "react";
import StatsButton from '../StatsButton';
import axios from "axios";
import TableRowTracks from "../TableRowTracks";
import Footer from "../Footer";

const ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";

function GetTopTracks() {
    const [data, setData] = useState({});
    const [timeRange, setTimeRange] = useState("last 4 weeks")

    const token = localStorage.getItem('accessToken');

    const getTopTracks = async (range) => {
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
        getTopTracks("short_term");
    }, []);

    return (
        <>
            <div className="container">
                <div className="recently-played-container">
                    <div className="title" >
                        <h1>Top Tracks - {timeRange} </h1>
                    </div>
                    <div className="stats__wrapper">
                        <ul className="stats-buttons">
                            <StatsButton title="last 4 weeks" onClick={() => { getTopTracks("short_term") }}></StatsButton>
                            <StatsButton title="last 6 months" onClick={() => { getTopTracks("medium_term") }}></StatsButton>
                            <StatsButton title="all time" onClick={() => { getTopTracks("long_term") }}></StatsButton>
                        </ul>
                    </div>
                    <div className="data__table data__table__tracks">
                        <div className="grid grid__tracks">
                            {data?.items ? data.items.map((item, index) => 
                                <TableRowTracks key={`${item.duration_ms} + ${index}`} img={item.album.images[2].url} name={item.name}
                                    artist={item.artists[0].name} url={item.external_urls.spotify} id={item.id}></TableRowTracks>) : null}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default GetTopTracks;