import React from "react";
import Meaning from "./Meaning";

function dictionaryInfo(props) {
  if (props.results !== null) {
    return (
      <main className="dictionary">
        <section className="dictionary__container">
          <div className="definition active">
            <h2>{props.results.word}</h2>
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
          {/*
        <div className="synonyms">
          <h2>synonyms</h2>
        </div>
        <div className="antonyms">
          <h2>antonyms</h2>
        </div>
        <div className="origin">
          <h2>origin</h2>
        </div> */}
        </section>
      </main>
    );
  } else {
    return null;
  }
}

export default dictionaryInfo;
