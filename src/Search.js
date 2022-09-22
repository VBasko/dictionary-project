import React, { useState } from "react";
import axios from "axios";

function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <header className="header">
      <div className="header__container">
        <form onSubmit={search}>
          <input type="search" onChange={(e) => setKeyword(e.target.value)} />
        </form>
      </div>
    </header>
  );
}

export default Search;
