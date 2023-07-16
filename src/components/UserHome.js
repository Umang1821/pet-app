import React from "react";
import "./UserHome.css";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import PetGallery from "./Pets";
import Slider from "./Slider";
import Footer from "./Footer";
import Services from "./Services";
import Counter from "./Counter";

function Dashboard() {
  return (
    <div>
        <Navbar/>
        <Herosection />
        <PetGallery />
        <Services />
        <Slider />
        <Counter /> 
        <Footer />
    </div>
  )
  };
export default Dashboard;
