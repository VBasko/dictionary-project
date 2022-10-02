import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

function dictionaryInfo(props) {
  if (props.results !== null) {
    return (
      <main className="dictionary">
        <section className="dictionary__container">
          <div className="definition active">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    );
  } else {
    return null;
  }
}

export default dictionaryInfo;
