// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Products from "./pages/Products";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/Products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
