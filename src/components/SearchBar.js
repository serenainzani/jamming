import React, { useState } from "react";
import Playlist from "./Playlist";
import SearchResults from "./SearchResults";

export default function SearchBar(props) {
    const [results, setResults] = useState("[]");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.value === "") {
            setResults(() => "[]");
        } else {
            setResults(() =>
                JSON.stringify(require("../testSpotifyResults.json"))
            );
        }
    };

    const handleAddTrack = (track) => {
        setPlaylistTracks((prevPlaylist) => [
            ...prevPlaylist,
            JSON.parse(track),
        ]);
    };

    const handleRemoveTrack = (track) => {
        setPlaylistTracks((prevPlaylist) =>
            prevPlaylist.filter(
                (playlistTrack) => playlistTrack.id !== JSON.parse(track).id
            )
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    onChange={handleSubmit}
                    placeholder="What music are you looking for?"
                ></input>
                <br />
                <button type="submit">Submit</button>
            </form>

            <div className="row">
                <div className="column">
                    <SearchResults
                        results={results}
                        addTrack={handleAddTrack}
                    />
                </div>
                <div className="column">
                    <Playlist
                        playlistTracks={JSON.stringify(playlistTracks)}
                        removeTrack={handleRemoveTrack}
                    />
                </div>
            </div>
        </>
    );
}
