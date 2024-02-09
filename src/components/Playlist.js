import React, { useState, useEffect } from "react";
import Track from "./Track";

export default function Playlist(props) {
    const [playListName, setPlaylistName] = useState("");

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
            .then((data) => setUserName(() => data.id));
    }, [userName]);

    const [playlistTracks, setPlaylistTracks] = useState([]);
    useEffect(() => {
        const results = JSON.parse(props.playlistTracks);
        setPlaylistTracks(results);
    }, [props.playlistTracks]);

    const handleChange = (event) => {
        setPlaylistName(() => event.target.value);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setPlaylistName(() => event.target.value);
        const currentUrl = window.location.href;
        const urlParams = new URLSearchParams(currentUrl.split("#")[1]);
        const accessToken = urlParams.get("access_token");
        const playistId = await makePlaylist(accessToken, userName);
        await addTracks(accessToken, playistId);
        alert(
            `Playlist '${playListName}' has been created.\nCheck your Spotify account!`
        );
    }

    async function makePlaylist(accessToken, userName) {
        const url = `https://api.spotify.com/v1/users/${userName}/playlists`;
        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: playListName,
                description: "This playist was made via Jammming",
                public: false,
            }),
            method: "POST",
        });

        const content = await response.json();
        const playlistId = content.id;

        return playlistId;
    }

    async function addTracks(accessToken, playlistId) {
        const uriTrackList = playlistTracks.map(
            (track) => "spotify:track:" + track.id
        );
        const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uris: uriTrackList }),
            method: "POST",
        });
        await response.json();
    }

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
                    name={playListName}
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
                <button type="submit">Save to Spotify</button>
                <br />
                <br />
            </form>
        </>
    );
}
