import { FiChevronRight } from "react-icons/fi";
import Select from 'react-select';
import styles from "./UserInputs.module.css";
import stations from "../../../data/stationsData";

function UserInputs() {
  return (
    <div className={styles.userInputsCont}>
      {/* <input
        type="text"
        placeholder="Enter your starting station"
        aria-placeholder="Enter your starting station"
      />
      <input
        type="text"
        placeholder="Enter your destiny station"
        aria-placeholder="Enter your destiny station"
      /> */}
      <SelectComponent 
        placeholder="Enter your starting station"
      />
      <SelectComponent 
        placeholder="Enter your destiny station"
      />
      <button type="submit">
        Go <FiChevronRight size="1.3rem" style={{ position: "absolute", right: "5px" }} />
      </button>
    </div>
  );
}

function SelectComponent({ placeholder, onChange }) {
  return (
    <Select
        isClearable
        // isSearchable
        placeholder={placeholder}
        // className="basic-single"
        // classNamePrefix="select"
        // defaultValue={"Rithala"}
        onChange={onChange}
        name="color"
        options={stations}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
          }),
        }}
      />
  )
}
 
export default UserInputs;
