import React, { useState } from "react";
import Tracklist from "./Tracklist";

export default function Playlist() {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(() => event.target.value);
    };

    return (
        <>
            <h2>Playlist</h2>
            <input
                id="playlistName"
                name={name}
                type="text"
                placeholder="Playlist Name"
                onChange={handleChange}
            ></input>
            <Tracklist />
            <br />
            <button type="submit">Save to Spotify</button>
        </>
    );
}
