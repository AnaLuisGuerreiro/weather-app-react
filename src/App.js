import React, { useState } from "react";
import "./app.css";

import Weather from "./Weather.js";
import Forecast from "./Forecast";
import Search from "./Search";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  function handleSearch(data) {
    setWeatherData(data);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="background">
          <Search onSearch={handleSearch} />
          <Weather data={weatherData} defaultCity="Lisbon" />
          <Forecast />
        </div>
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://portfolio-anaguerreiro.netlify.app/"
          alt="Ana Guerreiro"
        >
          {" "}
          Ana Guerreiro
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/AnaLuisGuerreiro/weather-app-react"
          alt="Github source"
        >
          open-sourced on Github.
        </a>
      </footer>
    </div>
  );
}

export default App;
