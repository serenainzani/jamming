import React, { useEffect, useState } from "react";
import Track from "./Track";

export default function SearchResults(props) {
    const [resultTracks, setResultTracks] = useState([]);
    useEffect(() => {
        const results = JSON.parse(props.results);
        setResultTracks(results);
    }, [props.results]);

    const handleCalllback = (trackId) => {
        const addedTrack = resultTracks.filter((track) => track.id === trackId);
        props.addTrack(JSON.stringify(addedTrack[0]));
    };

    return (
        <>
            <h2>Results</h2>
            {resultTracks.map((result) => (
                <Track
                    name={result.name}
                    artist={result.artist}
                    id={result.id}
                    key={result.id}
                    symbol="+"
                    callback={handleCalllback}
                />
            ))}
        </>
    );
}
