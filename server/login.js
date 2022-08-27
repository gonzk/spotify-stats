var express = require("express");

var router = express.Router();

var SpotifyWebApi = require("spotify-web-api-node");
scopes = ["user-top-read", "user-read-recently-played"];

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
});

// var login = router.get("/login", (req, res) => {
//   var html = spotifyApi.createAuthorizeURL(scopes);
//   console.log(html);
//   res.send(html + "&show_dialog=true");
// });

// router.get("/login", function (req, res) {
//   var html = spotifyApi.createAuthorizeURL(scopes);
//   console.log(html);
//   res.send(html + "&show_dialog=true");
// });

router.post("/", function (req, res) {
  res.send("POST handler for /dogs route.");
});

module.exports = router;
