import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NationalMuseumStyle from "./NationalMuseumStyle";
import VirtualTour from "./VirtualTour";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NationalMuseumStyle />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
      </Routes>
    </Router>
  );
}

export default App;
