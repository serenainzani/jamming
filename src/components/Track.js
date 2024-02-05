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

// curl -X POST "https://accounts.spotify.com/api/token" \
//      -H "Content-Type: application/x-www-form-urlencoded" \
//      -d "grant_type=client_credentials&client_id=7e9b1fa4e992419db57c7c003eda9e31&client_secret=1618e23c6f0f4f3b85ee9832db48d03f"

//      curl "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb" \
//      -H "Authorization: Bearer  BQByo0PhnkJS-GQ8wgTrpR0axm2iMXBXQSPcvbF9wIIAc138e5s3g46zINIgWcxfXRimnaFMrYdf4Hi5oMT1mY0dE0yD9X0-B3LN-2MomuSd49qMbEE"
