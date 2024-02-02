import React, { useState, useEffect } from "react";
import Tracklist from "./Tracklist";
import Track from "./Track";

export default function Playlist(props) {
    const [name, setName] = useState("");

    const [playlistTracks, setPlaylistTracks] = useState([]);
    useEffect(() => {
        const results = JSON.parse(props.playlistTracks);
        setPlaylistTracks(results);
    }, [props.playlistTracks]);

    const handleChange = (event) => {
        setName(() => event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Created playlist '${name}' with the following tracks:
        ${playlistTracks.map((result) => result.name)}`);
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
