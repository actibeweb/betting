import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/common/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import Sports from "./components/auth/Sports";
function App() {
  return ( 
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/sports/soccer" element={<Sports />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
