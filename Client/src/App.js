import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/Login";
import NoticePage from "../src/components/NoticePage";
import Register from "../src/components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NoticePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
