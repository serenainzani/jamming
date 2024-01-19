import React from "react";

export default function SearchBar(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const results = JSON.stringify(require("../testSpotifyResults.json"));
    props.callBack(results);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="search"></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
