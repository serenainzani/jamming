import "../styles/App.scss";
import SearchBar from "./SearchBar";
import React from "react";

function App() {
    return (
        <div className="App">
            <div className="background">
                <div className="main">
                    <h1>Jammming</h1>
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}

export default App;
