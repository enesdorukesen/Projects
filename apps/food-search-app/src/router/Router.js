import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
