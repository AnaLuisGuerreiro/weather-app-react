import Weather from "./Weather.js";
import Forecast from "./Forecast";

import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="background">
          <Weather defaultCity="Lisbon" />
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
