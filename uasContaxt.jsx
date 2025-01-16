import React, { useContext, createContext } from "react";

const ThemeContext = createContext("light");

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
}
