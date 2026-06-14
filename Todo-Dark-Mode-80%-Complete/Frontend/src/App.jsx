import React from "react";
import { ThemeProvider } from "./components/utils/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
