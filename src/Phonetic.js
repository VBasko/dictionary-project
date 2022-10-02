import React from "react";
import AudioButton from "./AudioButton";

function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <AudioButton audio={props.phonetic.audio} />
        {props.phonetic.text}
      </div>
    );
  } else if (props.phonetic.text) {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  } else {
    return (
      <div className="Phonetic">
        <AudioButton audio={props.phonetic.audio} />
      </div>
    );
  }
}

export default Phonetic;
