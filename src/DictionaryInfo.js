import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./DictionaryInfo.css";

function dictionaryInfo(props) {
  if (props.results !== null) {
    return (
      <main className="dictionary">
        <section className="dictionary__container">
          <h2>{props.results.word}</h2>
          <div className="phonetics">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </main>
    );
  } else {
    return null;
  }
}

export default dictionaryInfo;
