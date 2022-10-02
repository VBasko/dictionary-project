import React from "react";

function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <h2>Audio &amp; text</h2>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        {props.phonetic.text}
      </div>
    );
  } else if (props.phonetic.text) {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  } else {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    );
  }
}

export default Phonetic;
