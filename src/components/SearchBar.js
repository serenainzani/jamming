import React, { useState } from "react";
import Playlist from "./Playlist";
import SearchResults from "./SearchResults";

export default function SearchBar(props) {
  const [results, setResults] = useState("[]");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      setResults(() => "[]");
    } else {
      setResults(() => JSON.stringify(require("../testSpotifyResults.json")));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleSubmit}
          placeholder="What music are you looking for?"
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="row">
        <div className="column">
          <SearchResults results={results} />
        </div>
        <div className="column">
          <Playlist />
        </div>
      </div>
    </>
  );
}
