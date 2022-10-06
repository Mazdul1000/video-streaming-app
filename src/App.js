import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<Video></Video>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
