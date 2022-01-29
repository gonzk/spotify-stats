import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import GetRecentlyPlayed from "./components/Spotify/GetRecentlyPlayed";
import GetTopTracks from "./components/Spotify/GetTopTracks";
import GetTopArtists from "./components/Spotify/GetTopArtists";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" exact element={<Login/>}></Route>
        <Route path="/home" exact element={<Home/>}></Route>
        <Route path="/top-tracks" exact element={<GetTopTracks />}></Route>
        <Route path="/top-artists" exact element={<GetTopArtists />}></Route>
        <Route path="/recently-played" exact element={<GetRecentlyPlayed />}></Route>
          <Route path="/logout" exact element={<Logout />}></Route>
        </Routes>
      </Router>
    </>
    
  );
};

export default App;