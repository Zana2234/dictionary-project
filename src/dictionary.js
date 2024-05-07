import { useState } from "react";
import React from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for "${keyword}" definition`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" value={keyword} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
