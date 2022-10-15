import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <ol>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <li key={index}>
              <p className="definition">{definition.definition}</p>
              <p className="example">
                <em>{definition.example}</em>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Meaning;
