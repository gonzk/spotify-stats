import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import "../styles/Login.css";
import * as CREDS from "../../constants";

function Logout() {
    const handleLogout = () => {
        localStorage.clear();
    }

    useEffect(() => {
        handleLogout();
    }, []);

    const handleLogin = () => {
        window.location = `${CREDS.AUTH_ENDPOINT}?client_id=${CREDS.CLIENT_ID}&redirect_uri=${CREDS.REDIRECT_URI}&scope=${CREDS.SCOPES_URL}&response_type=${CREDS.RESPONSE_TYPE}&show_dialog=true`;
    }

    return (
        <>
            <div className="login-container">
                <header className="login">
                    <h1 className="login-title">Spotify Stats</h1>
                    <p className="logout-message">You are now logged out of Spotify Stats</p>
                    <p className="login-desc">Log into Spotify to find out your Top Tracks, <br />
                        Top Artists and Recently Played Tracks</p>
                    <div className="button-container">
                            <button className="login-button" onClick={handleLogin}>
                                Login to Spotify
                            </button>
                    </div>
                </header>
            </div>
            <Footer/>
        </>
    );
}

export default Logout;