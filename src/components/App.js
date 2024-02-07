import "../styles/App.scss";
import SearchBar from "./SearchBar";
import React from "react";
import authoriseImplictGrantSpotify from "../authorise";

function App() {
    if (window.location.href === "http://localhost:3000/") {
        console.log("ehy");
        authoriseImplictGrantSpotify();
    }
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
