import Login from "./Components/Login";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Verfication from "./Components/Verfication";
import Shipments from "./Pages/Shipments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/verification" element={<Verfication />} />
      <Route path="/shipments" element={<Shipments />} />
    </Routes>
  );
}

export default App;
