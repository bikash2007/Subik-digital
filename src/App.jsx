import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Landing/Hero";
import About from "./Landing/About";
import OurServices from "./Landing/OurServices";
import Portfolio from "./Landing/Portfolio";
import Pricing from "./Landing/Pricing";
import WhyUs from "./Landing/WhyUs";
import Testimonials from "./Landing/Testimonials";
import Contact from "./Landing/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen bg-dark-primary">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <OurServices />

        {/* Portfolio Section */}
        {/* <Portfolio /> */}

        {/* Pricing Section */}
        {/* <Pricing /> */}

        {/* Why Choose Us Section */}
        <WhyUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
