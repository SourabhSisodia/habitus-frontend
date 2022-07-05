import React from "react";
import "./App.css";

//Pages imports
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Facilities from "./pages/Facilities/Facilities.jsx";
function App() {
  return (
    <div className="App">
      <Home></Home>
      {/* <Pricing></Pricing>
      <Facilities></Facilities> */}
    </div>
  );
}

export default App;
