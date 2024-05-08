import { useState } from "react";
import React from "react";
import "./dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for "${keyword}" definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" value={keyword} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
