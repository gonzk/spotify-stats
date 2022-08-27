import React from "react";
import "../styles/Login.css";
import * as CREDS from "../../constants";
import Footer from "../Footer";

const Login = () => {
  const [data, setData] = [];
  const handleLogin = React.useEffect(() => {
    fetch("/login", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "Content-Type, Authorization",
      },
    })
      .then((res) => console.warn(res))
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <div className="login-container">
        <header className="login">
          <h1 className="login-title">Spotify Stats</h1>
          <p className="login-desc">
            Log into Spotify to find out your Top Tracks, <br />
            Top Artists and Recently Played Tracks
          </p>
          <div className="button-container">
            <button className="login-button" onClick={handleLogin}>
              Login to Spotify
            </button>
          </div>
          <Footer />
        </header>
      </div>
    </>
  );
};

export default Login;
