import React, { useState } from "react";
import axios from "axios";
import DictionaryInfo from "./DictionaryInfo";
import { GiOpenBook } from "react-icons/gi";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1>
            <GiOpenBook />
            Dictionary
          </h1>
          <form onSubmit={search}>
            <input type="search" onChange={(e) => setKeyword(e.target.value)} />
          </form>
        </div>
      </header>
      <DictionaryInfo results={results} />
    </>
  );
}

export default Dictionary;
