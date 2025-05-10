
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import HowToBuySection from "@/components/HowToBuySection";
import FaqSection from "@/components/FaqSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <HowToBuySection />
      <FaqSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
