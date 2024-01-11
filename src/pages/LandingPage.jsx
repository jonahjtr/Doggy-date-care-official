import React, { useEffect } from "react";
import Header from "../components/Header";
import AboutSection from "../landingPage/AboutSection";
import DescriptionSection from "../landingPage/DescriptionSection";
import BenefitsSection from "../landingPage/BenefitsSection";
import useCheckToken from "../components/utils/useCheckToken";

function LandingPage() {
  const isLoggedIn = useCheckToken();

  useEffect(() => {
    if (isLoggedIn === true) {
      window.location.replace("/dashboard");
    }
  }, []);

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
