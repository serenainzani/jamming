import React from "react";
import Tracklist from "./Tracklist";

export default function Playlist() {
  return (
    <>
      <h2>Playlist</h2>
      <input
        id="playlistName"
        name="playlistName"
        type="text"
        placeholder="Playlist Name"
      ></input>
      <Tracklist />
      <br />
      <button type="submit">Save to Spotify</button>
    </>
  );
}
