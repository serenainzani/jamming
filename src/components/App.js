import "../styles/App.scss";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="main">
          <h1>Jammming</h1>
          <SearchBar />
          <div className="row">
            <div className="column">
              <SearchResults />
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
