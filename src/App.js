import "./App.css";
import logo from "./logo.png";

import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          alt="SheCodes-logo"
          className="App-logo img-fluid"
        ></img>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/Zana2234"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ana Zabaleta
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Zana2234/dictionary-project.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://dictionary-project-ana.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
