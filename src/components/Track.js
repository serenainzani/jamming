import React from "react";
import "../styles/Track.scss";

export default function Track(props) {
    const handleClick = () => {
        props.callback(props.id);
    };

    return (
        <>
            <div className="parent">
                <div className="songTitle">
                    <span>{props.name}</span>
                </div>
                <div className="songArtist">
                    <span>{props.artist}</span>
                </div>
                <div className="addRemoveSong">
                    <button type="button" onClick={handleClick}>
                        {props.symbol}
                    </button>
                </div>
            </div>
            <hr />
        </>
    );
}
