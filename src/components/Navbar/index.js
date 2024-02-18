import React, { useContext } from "react";
import styles from "./index.module.sass";
import { ContextToggle } from "../../Context";

export default function Navbar() {
  const { toggle, setToggle } = useContext(ContextToggle);
  const handleCheckboxChange = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: toggle ? "#212121" : "#fff",
        color: toggle ? "#fff" : "#212121",
        transition: "all 1s",
      }}
    >
      <div className={styles.navbar}>
        <h1>{"< D i k o />"}</h1>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={toggle}
              onChange={handleCheckboxChange}
            />
            <span className="slider"></span>
          </label>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <button
            style={{
              backgroundColor: toggle ? "#223243" : "#fff",
              color: toggle ? "#fff" : "#212121",
              border: toggle
                ? "0.5px solid rgba(255, 255, 255, 0.62)"
                : "0.5px solid gray",
              transition: "all 1s",
            }}
            className={toggle ? "night" : "light"}
          >
            Rezume
          </button>
        </div>
      </div>
    </div>
  );
}
