import React from "react";
import Navbar from "../rider_register/Navbar";
import Header from "../rider_register/Header";
import CardHeader from "../rider_register/CardHeader";
import SectionM from "../rider_register/SectionM";
import Note from "../rider_register/Note";
import Slider from "../rider_register/Slider";
import Footer from "../rider_register/Footer";
import FooterDark from "../rider_register/FooterDark";
const Main = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Header />
      <CardHeader />
      <SectionM />
      <Note />
      <Slider />
      <Footer />
      <FooterDark />
    </div>
  );
};

export default Main;
