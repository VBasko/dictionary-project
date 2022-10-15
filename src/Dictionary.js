import React, { useState } from "react";
import axios from "axios";
import DictionaryInfo from "./DictionaryInfo";
import { GiOpenBook } from "react-icons/gi";
import "./Dictionary.css";

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
          <div className="header__title title">
            <GiOpenBook />
            <h1>Dictionary</h1>
          </div>
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="What would you like to search?"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </form>
        </div>
      </header>
      <DictionaryInfo results={results} />
      <footer className="footer">
        <div className="footer__container">
          <a
            href="https://github.com/VBasko/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Coded by Viktoriia Basko
          </a>
        </div>
      </footer>
    </>
  );
}

export default Dictionary;
