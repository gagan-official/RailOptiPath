import styles from "./Stations.module.css";

function Stations() {
  const staticData = [1, 2, 3, 4, 5, 6];
  return (
    <seciton className={styles.stationsCont}>
      {staticData.map((items, index) => {
        return (
          <div key={index} className={styles.stationTile}>
            <span style={{ backgroundColor: "#FFD600" }}>{items}</span> Dilli
            Haat - INA
          </div>
        );
      })}
    </seciton>
  );
}

export default Stations;
