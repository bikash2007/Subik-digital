import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Landing/Hero";
import ClientStrip from "./Landing/ClientStrip";
import OurServices from "./Landing/OurServices";
import Portfolio from "./Landing/Portfolio";
import Process from "./Landing/Process";
import Pricing from "./Landing/Pricing";
import WhyUs from "./Landing/WhyUs";
import Testimonials from "./Landing/Testimonials";
import Team from "./Landing/About";
import Roadmap from "./Landing/Roadmap";
import Blog from "./Landing/Blog";
import FinalCTA from "./Landing/FinalCTA";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Client Logo Strip */}
        <ClientStrip />

        {/* 3. Services */}
        <OurServices />

        {/* 4. Portfolio / Our Work */}
        <Portfolio />

        {/* 5. Process */}
        <Process />

        {/* 6. Pricing */}
        <Pricing />

        {/* 7. Why Choose Subik */}
        <WhyUs />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Team */}
        <Team />

        {/* 11. Blog / Insights */}
        <Blog />

        {/* 12. Final CTA / Contact */}
        <FinalCTA />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
};

export default App;
