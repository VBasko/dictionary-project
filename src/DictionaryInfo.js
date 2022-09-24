import React from "react";

function dictionaryInfo(props) {
  return (
    <main className="dictionary">
      <section className="dictionary__container">
        <div className="definition active">
          <h2>definition</h2>
        </div>
        <div className="synonyms">
          <h2>synonyms</h2>
        </div>
        <div className="antonyms">
          <h2>antonyms</h2>
        </div>
        <div className="origin">
          <h2>origin</h2>
        </div>
      </section>
    </main>
  );
}

export default dictionaryInfo;
