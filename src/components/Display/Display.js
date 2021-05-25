import styles from "./Display.module.css";

const Display = (props) => {
  return (
    <div id={"display"}>
      <div className={styles.display}>{props.display}</div>
    </div>
  );
};

export default Display;
