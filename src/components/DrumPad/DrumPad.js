import styles from "./DrumPad.module.css";
import KeyboardEventHandler from "react-keyboard-event-handler";

const DrumPad = (props) => {
  const clickHandler = () => {
    document.getElementById(props.handleKeys).play();
  };

  return (
    <div id={props.id} onClick={clickHandler} className={'drum-pad'}>
      <KeyboardEventHandler
        handleKeys={props.handleKeys}
        onKeyEvent={(key, e) =>
          document.getElementById(props.handleKeys).play()
        }
      />
      <div>{props.handleKeys}</div>
      <audio className="clip" id={props.handleKeys}>
        <source src={props.audioSrc} type={"audio/mpeg"} />
        Audio not supported...
      </audio>
    </div>
  );
};

export default DrumPad;
