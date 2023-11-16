import React from "react";
import { Route, Routes } from "react-router-dom";
import Allcomp from "../components/Allcomp";
import Cart from "../components/Cart";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Allcomp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routers;
