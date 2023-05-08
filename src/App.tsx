import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Layout, Home, About } from "./components";

function App() {
  return (
    <div className="App">
      <canvas id="canvas"></canvas>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
