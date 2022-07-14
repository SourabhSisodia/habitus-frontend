import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//Pages imports
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Facilities from "./pages/Facilities/Facilities.jsx";
import Error from "./pages/Error/Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/facilities" element={<Facilities />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
