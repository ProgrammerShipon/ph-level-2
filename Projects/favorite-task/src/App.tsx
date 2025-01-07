import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 mt-20">
        <Outlet />
      </div>
    </>
  );
}

export default App;
