import React from "react";
import Navbar from "./Navbar";
import CardContainer from "../blog/CardContainer";
import News from "../blog/News";
import Footer from "../blog/Footer";
const Main = () => {
  return (
    <div>
      <Navbar />
      <CardContainer />
      <News />
      <Footer />
    </div>
  );
};

export default Main;
