import "./App.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/Users/ana/Desktop/SheCodes/GitHub/React/dictionary-project/public/img/logo.png"
          alt="SheCodes-logo"
        ></img>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.delac.io/"
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
