import React, { useState } from "react";
import Playlist from "./Playlist";
import SearchResults from "./SearchResults";

export default function SearchBar() {
    const [results, setResults] = useState("[]");
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [userSearch, setUserSearch] = useState("");

    async function getTrack(accessToken, trackName) {
        const trackNameNoSpace = trackName.replace(/ /g, "+");
        const url = `https://api.spotify.com/v1/search?q=${trackNameNoSpace}&type=track&market=GB&limit=5&offset=0`;
        const response = await fetch(url, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        });
        const data = await response.json();
        let dataSimplified = [];
        data.tracks.items.forEach((track) => {
            dataSimplified.push({
                artist: track.album.artists[0].name,
                name: track.name, // Could add functionality for more artists being displayed
                album: track.album.name,
                id: track.id,
            });
        });
        setResults(() => JSON.stringify(dataSimplified));
    }

    const handleSubmitChange = (event) => {
        setUserSearch(() => event.target.value);
        event.preventDefault();
        let userSearchString = document.getElementById("userSearch").value;
        if (event.target.value === "") {
            setResults(() => "[]");
        } else {
            const currentUrl = window.location.href;
            // Have to split by # as for some reason the access token is starting with a hastag
            const urlParams = new URLSearchParams(currentUrl.split("#")[1]);
            const accessToken = urlParams.get("access_token");
            getTrack(accessToken, userSearchString);
        }
    };

    const handleAddTrack = (track) => {
        const trackParsed = JSON.parse(track);
        const trackInPlaylist = playlistTracks.some(
            (pTrack) => pTrack.id === trackParsed.id
        );
        if (!trackInPlaylist) {
            setPlaylistTracks((prevPlaylist) => [
                ...prevPlaylist,
                JSON.parse(track),
            ]);
        } else {
            alert(`${trackParsed.name} is already in your playlist.`);
        }
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
            <form onSubmit={handleSubmitChange}>
                <input
                    type="search"
                    onChange={handleSubmitChange}
                    placeholder="What music are you looking for?"
                    value={userSearch}
                    id="userSearch"
                ></input>
                <button type="submit">Submit</button>
                <br />
                <br />
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
