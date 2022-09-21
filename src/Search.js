import React, { useState } from "react";

function Search() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
