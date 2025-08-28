import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NationalMuseumStyle from "./NationalMuseumStyle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NationalMuseumStyle />} />
      </Routes>
    </Router>
  );
}

export default App;
