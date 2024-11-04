import React, { useContext } from "react";
import ThemeContext from "../Theme/ThemeContext";

const Why = ({ message, onClose }) => {
  const {dark} = useContext(ThemeContext)
  return (
    <div
      className={
        dark
          ? "fixed bottom-0 right-2 m-4 px-6 py-4 bg-black text-white text-lg shadow-lg transition-opacity duration-300 ease-in-out flex flex-col"
          : "fixed bottom-0 right-2 m-4 px-6 py-4 bg-gray-500 text-white text-lg shadow-lg transition-opacity duration-300 ease-in-out flex flex-col"
      }
    >
      <span className="text-center">{message}</span>
      <button onClick={onClose} className=" text-white text-center">
        X
      </button>
    </div>
  );
};

export default Why;
