import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact, Home, Shop } from "./paths";
import { Nav } from "./components";

const MyRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};
export default MyRoutes;
