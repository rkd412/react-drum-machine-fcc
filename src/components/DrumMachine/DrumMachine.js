import { useState } from "react";
import Display from "../Display/Display";
import DrumPad from "../DrumPad/DrumPad";
import styles from "./DrumMachine.module.css";
import KeyboardEventHandler from "react-keyboard-event-handler";

const DrumMachine = () => {
  const [display, setDisplay] = useState(
    "Click some buttons to hear some sounds!!"
  );

  if (display === "q") {
    setDisplay("Heater 1");
  } else if (display === "w") {
    setDisplay("Heater 2");
  } else if (display === "e") {
    setDisplay("Heater 3");
  } else if (display === "a") {
    setDisplay("Heater 4");
  } else if (display === "s") {
    setDisplay("Clap");
  } else if (display === "d") {
    setDisplay("Open HH");
  } else if (display === "z") {
    setDisplay("KicknHat");
  } else if (display === "x") {
    setDisplay("Kick");
  } else if (display === "c") {
    setDisplay("Closed HH");
  }

  return (
    <div className={drummachine} id={"drum-machine"}>
      <Display display={display} />
      <div className={grid}>
        <div className={padcontainer}
          onClick={() => {
            setDisplay("Heater 1");
          }}
        >
          <DrumPad
            id={"qKey"}
            handleKeys={["Q"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          />
        </div>

        <div className={padcontainer}
          onClick={() => {
            setDisplay("Heater 2");
          }}
        >
          <DrumPad
            id={"wKey"}
            handleKeys={["W"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          />
        </div>
        <div className={padcontainer}
          onClick={() => {
            setDisplay("Heater 3");
          }}
        >
          <DrumPad
            id={"eKey"}
            handleKeys={["E"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          />
        </div>
        <div className={padcontainer}
          onClick={() => {
            setDisplay("Heater 4");
          }}
        >
          <DrumPad
            id={"aKey"}
            handleKeys={["A"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          />
        </div>
        <div className={padcontainer}
          onClick={() => {
            setDisplay("Clap");
          }}
        >
          <DrumPad
            id={"sKey"}
            handleKeys={["S"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          />
        </div>
        <div className={padcontainer}
          onClick={() => {
            setDisplay("Open HH");
          }}
        >
          <DrumPad
            id={"dKey"}
            handleKeys={["D"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          />
        </div>
        <div className={padcontainer}
          onClick={() => {
            setDisplay("KickNHat");
          }}
        >
          <DrumPad
            id={"zKey"}
            handleKeys={["Z"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          />
        </div>
        <div className={padcontainer}
          onClick={() => {
            setDisplay("Kick");
          }}
        >
          <DrumPad
            id={"xKey"}
            handleKeys={["X"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          />
        </div>
        <div className={padcontainer}
          onClick={() => {
            setDisplay("Closed HH");
          }}
        >
          <DrumPad
            id={"cKey"}
            handleKeys={["C"]}
            audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          />
        </div>
      </div>
      <KeyboardEventHandler
        handleKeys={["q", "w", "e", "a", "s", "d", "z", "x", "c"]}
        onKeyEvent={(key, e) => setDisplay(key)}
      />
    </div>
  );
};

export default DrumMachine;
