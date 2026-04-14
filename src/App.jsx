import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddDonor from "./pages/AddDonor";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-donor" element={<AddDonor />} />
      </Routes>
    </>
  );
};

export default App;
