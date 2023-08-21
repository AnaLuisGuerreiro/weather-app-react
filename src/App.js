import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
    </div>
  );
}

export default App;
