import React from "react";
import AudioButton from "./AudioButton";
import AudioButtonDisabled from "./AudioButtonDisabled";
import "./Phonetic.css";

function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <AudioButton audio={props.phonetic.audio} />
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else if (props.phonetic.text) {
    return (
      <div className="Phonetic">
        <AudioButtonDisabled />
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <AudioButton audio={props.phonetic.audio} />
        <p>/-----/</p>
      </div>
    );
  }
}

export default Phonetic;
