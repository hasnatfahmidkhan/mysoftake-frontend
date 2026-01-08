import React from "react";
import VisionHero from "./VisionHero/VisionHero";
import ServicesSection from "./ServicesSection/ServicesSection";
import FaqContact from "./FaqContact/FaqContact";

const Service = () => {
  return (
    <div className="bg-base-100">
      <VisionHero />
      <ServicesSection />
      <FaqContact />
    </div>
  );
};

export default Service;
