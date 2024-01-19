import React, { useState } from "react";
import Track from "./Track";

export default function SearchResults(props) {
  const trackCallBack = (trackData) => {
    results.pop();
    alert(results);
  };

  let results = props.results;
  const tracks2 = [];
  if (results !== "") {
    results = JSON.parse(props.results);
    for (let i = 0; i < results.length; i++) {
      tracks2.push(
        <Track
          name={results[i].name}
          artist={results[i].artist}
          id={results[i].id}
          callBack={trackCallBack}
          symbol="+"
        />
      );
    }
    results = tracks2;
  }

  return (
    <>
      <h2>Results</h2>
      {results}
    </>
  );
}
