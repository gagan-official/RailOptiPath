import styles from "./Stations.module.css";

function Stations() {
  const colors = {
    pink: "#e692be",
    yellow: "#f5d618",
    red: "#c1282b",
  };
  const staticDataa = [
    {
      id: 1,
      name: "Dilli Haat - INA",
      color: colors.yellow,
    },
    {
      id: 2,
      name: "Kashmiri Gate",
      color: colors.yellow,
    },
    {
      id: 3,
      name: "Bhikaji Cama Place",
      color: colors.pink,
    },
    {
      id: 4,
      name: "Lajpath Nagar",
      color: colors.pink,
    },
    {
      id: 5,
      name: "Rithala",
      color: colors.red,
    },
    {
      id: 6,
      name: "Sarojini Nagar",
      color: colors.pink,
    },
    {
      id: 7,
      name: "Rajouri Garden",
      color: colors.pink,
    },
  ];
  return (
    <section className={styles.stationsCont}>
      {staticDataa.map((items, index) => {
        return (
          <div key={index} className={styles.stationTile}>
            <span style={{ backgroundColor: items.color }}>{items.id}</span>
            {items.name}
          </div>
        );
      })}
    </section>
  );
}

export default Stations;


const ButtonComp = ({
  buttonStyle,
  buttonClasses,
  otherProps
}) => {
  return (
    <button {...otherProps} style={buttonStyle} className={`${styles.predefinedClass} ${buttonClasses}`}></button>
  )
}