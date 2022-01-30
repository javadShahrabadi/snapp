import React from "react";
import Navbar from "./Navbar";
import MSection from "./MSection";
import DSection from "./DSection";
import Footer from "./Footer";
const Main = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <MSection />
      <DSection />
      <Footer />
    </div>
  );
};

export default Main;
