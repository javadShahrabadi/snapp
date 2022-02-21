import React from "react";
import Navbar from "../Navbar";
import Map from "./Map";
import Address from "./Address";
import Divider from "./Divider";
import Footer from "../../components/Footer";
const Main = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Map />
      <Address />
      <Divider />
      <Footer />
    </div>
  );
};

export default Main;
