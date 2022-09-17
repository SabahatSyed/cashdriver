import { Route, Routes, Navigate } from "react-router-dom";
import NavigationPanel from "./components/NavigationPanel";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <NavigationPanel />
    </div>
  );
}

export default App;
