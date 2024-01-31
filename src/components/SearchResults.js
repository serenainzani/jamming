import React, { useState } from "react";
import Track from "./Track";

export default function SearchResults(props) {
  const results = eval(props.results);
  let resultTracks = [];

  if (results.length > 0) {
    for (let i = 0; i < results.length; i++) {
      resultTracks.push(
        <Track
          name={results[i].name}
          artist={results[i].artist}
          id={results[i].id}
          symbol="+"
        />
      );
    }
  }

  // const results = [];

  // const trackCallBack = (trackData) => {
  //   tracks.pop();
  //   alert(tracks);
  // };

  // const tracks2 = [
  //   <Track name={"hwy"} artist={"why"} id={"jw"} callBack={"kjw"} symbol="+" />,
  // ];

  // if (tracks2.length === 0) {
  //   alert("yes");
  //   setTracks(JSON.parse(props.results));
  //   for (let i = 0; i < tracks.length; i++) {
  //     tracks2.push(
  //       <Track
  //         name={tracks[i].name}
  //         artist={tracks[i].artist}
  //         id={tracks[i].id}
  //         callBack={trackCallBack}
  //         symbol="+"
  //       />
  //     );
  //   }
  //   setTracks(tracks2);
  // }

  return (
    <>
      <h2>Results</h2>
      {resultTracks}
    </>
  );
}
