import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import AboutSection from "../landingPage/AboutSection";
import DescriptionSection from "../landingPage/DescriptionSection";
import BenefitsSection from "../landingPage/BenefitsSection";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <AboutSection />
      <DescriptionSection />
      <BenefitsSection />
    </div>
  );
}

export default LandingPage;
