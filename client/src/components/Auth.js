import { useEffect } from 'react';

export default function Auth() {
    const getSpotifyAuthResults = (hash) => {
        const stringAfterHashtag = hash.substring(1);
        const params = stringAfterHashtag.split("&");
        const splitParams = params.reduce((acc, currentVal) => {
            const [key, val] = currentVal.split("=");
            acc[key] = val;
            return acc;
        }, {});

        return splitParams;
    }

    useEffect(() => {
        if (window.location.hash) {
        const { access_token, expires_in, token_type } =
            getSpotifyAuthResults(window.location.hash);

        localStorage.clear();
        window.history.pushState({}, null, '/');
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("expiresIn", expires_in);
        window.location = "/home";
        }
    }, []);
}


