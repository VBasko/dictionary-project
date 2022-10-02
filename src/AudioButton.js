import React from "react";
import { AiFillSound } from "react-icons/ai";
import { Howl } from "howler";

function AudioButton(props) {
  function soundPlay() {
    const sound = new Howl({
      src: [props.audio],
    });

    sound.play();
  }

  return (
    <button onClick={soundPlay}>
      <AiFillSound />
    </button>
  );
}

export default AudioButton;
