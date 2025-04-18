import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <Footer />
    </>
  );
};

export default HomePage;