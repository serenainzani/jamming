import "../styles/App.scss";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import { useState } from "react";

function App() {
  const [results, setResults] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState("");

  const handleCallBack = (childData) => {
    setResults(childData);
  };

  return (
    <div className="App">
      <div className="background">
        <div className="main">
          <h1>Jammming</h1>
          <SearchBar callBack={handleCallBack} />
          <div className="row">
            <div className="column">
              <SearchResults results={results} />
            </div>
            <div className="column">
              <Playlist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
