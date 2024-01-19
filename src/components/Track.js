import React from "react";
import "../styles/Track.scss";

export default function Track() {
  return (
    <>
      <div className="parent">
        <div className="songTitle">
          <span>Song Name</span>
        </div>
        <div className="songArtist">
          <span>Artist</span>
        </div>
        <div className="addRemoveSong">
          <button type="button">+</button>
        </div>
      </div>
      <hr />
    </>
  );
}
