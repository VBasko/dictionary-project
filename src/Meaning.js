import React from "react";

function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions[0].definition}
    </div>
  );
}

export default Meaning;
