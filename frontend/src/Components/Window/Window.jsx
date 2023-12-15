import Stations from "./Stations/Stations";
import UserInputs from "./UserInputs/UserInputs";
import styles from "./Window.module.css";

function Window() {
  return (
    <main className={styles.windowCont}>
      Enter your start station and your destiny station and click on Go button.
      <UserInputs/>
      <Stations/>
    </main>
  );
}

export default Window;
