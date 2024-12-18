import "./App.css";
import { Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import NavBar from "./NavBar";
import Expenses from "./Expenses";
import AddBudget from "./AddBudget";
import Settings from "./Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="settings" element={<Settings />} />
        <Route path="add-budget" element={<AddBudget />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
