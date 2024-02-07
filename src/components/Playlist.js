import React, { useState, useEffect } from "react";
import Tracklist from "./Tracklist";
import Track from "./Track";

export default function Playlist(props) {
    const [name, setName] = useState("");

    const [userName, setUserName] = useState("");
    useEffect(() => {
        const currentUrl = window.location.href;
        const urlParams = new URLSearchParams(currentUrl.split("#")[1]);
        const accessToken = urlParams.get("access_token");
        fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        })
            .then((response) => response.json())
            .then((data) => setUserName(() => data.id))
            .then(() => console.log("username", userName));
    }, []);

    const [playlistTracks, setPlaylistTracks] = useState([]);
    useEffect(() => {
        const results = JSON.parse(props.playlistTracks);
        setPlaylistTracks(results);
    }, [props.playlistTracks]);

    const handleChange = (event) => {
        setName(() => event.target.value);
    };

    async function makePlaylist(accessToken, userName) {
        const url = `https://api.spotify.com/v1/users/${userName}/playlists`;
        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: "This playist was made via Jammming",
                public: false,
            }),
            method: "POST",
        });
        const content = await response.json();

        const playlistId = content.id;
        const uriTrackList = playlistTracks.map(
            (track) => "spotify:track:" + track.id
        );
        const url2 = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        console.log(url2);

        const response2 = await fetch(url2, {
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uris: uriTrackList }),
            method: "POST",
        });
        const content2 = await response2.json();
        console.log(content2);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Created playlist '${name}' with the following tracks:
        // ${playlistTracks.map((result) => result.id)}`);

        const currentUrl = window.location.href;
        const urlParams = new URLSearchParams(currentUrl.split("#")[1]);
        const accessToken = urlParams.get("access_token");

        makePlaylist(accessToken, userName);
    };

    const handleCalllback = (trackId) => {
        const removedTrack = playlistTracks.filter(
            (track) => track.id === trackId
        );
        props.removeTrack(JSON.stringify(removedTrack[0]));
    };

    return (
        <>
            <h2>Playlist</h2>
            <form onSubmit={handleSubmit}>
                <input
                    id="playlistName"
                    name={name}
                    type="text"
                    placeholder="Playlist Name"
                    onChange={handleChange}
                ></input>
                <br />
                <br />
                {playlistTracks.map((result) => (
                    <Track
                        name={result.name}
                        artist={result.artist}
                        id={result.id}
                        key={result.id}
                        symbol="-"
                        callback={handleCalllback}
                    />
                ))}
                {/* <Tracklist /> */}

                <button type="submit">Save to Spotify</button>
            </form>
        </>
    );
}
