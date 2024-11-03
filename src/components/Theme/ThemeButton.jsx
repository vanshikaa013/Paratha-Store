import { useContext } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../Theme/ThemeContext";

const ThemeButton = () => {
  const { dark, dispatch } = useContext(ThemeContext);

  const handleThemeChange = () => {
    dispatch({ type: "Change-Theme" });
    console.log("theme")
  };

  return (
    <button
      id="themeButton"
      onClick={handleThemeChange}
      className={`btn btn-sm flex items-center justify-center ${dark ? "btn-light text-black bg-white" : "btn-dark text-white bg-black"}`}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {dark ? <FaSun /> : <FaRegMoon />}
    </button>
  );
};

export default ThemeButton;