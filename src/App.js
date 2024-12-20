import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="paris" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/MariaNagornaya1980"
            target="_blank"
            rel="noreferrer"
          >
            Maria Nagornaya
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MariaNagornaya1980/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-masha.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
