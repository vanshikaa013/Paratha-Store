import React, { createContext, useReducer, useEffect } from "react";

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "Change-Theme":
      return { dark: !state.dark };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { dark: JSON.parse(localStorage.getItem("dark")) || false });

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(state.dark));
  }, [state.dark]);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;