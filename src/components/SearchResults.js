import React, { useEffect, useState } from "react";
import Track from "./Track";

export default function SearchResults(props) {
    const results = JSON.parse(props.results);
    const [resultTracks, setResultTracks] = useState([]);

    const handleCalllback = (trackId) => {
        setResultTracks((prevTracks) =>
            prevTracks.filter((track) => track.key !== trackId.toString())
        );
    };

    useEffect(() => {
        if (results.length > 0) {
            const tracks = results.map((result) => (
                <Track
                    name={result.name}
                    artist={result.artist}
                    id={result.id}
                    key={result.id}
                    symbol="+"
                    callback={handleCalllback}
                />
            ));
            if (JSON.stringify(tracks) !== JSON.stringify(resultTracks)) {
                setResultTracks(() => tracks);
            }
        }
    }, [results]);

    return (
        <>
            <h2>Results</h2>
            {resultTracks}
        </>
    );
}
