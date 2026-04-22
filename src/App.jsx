import React from "react";
import MobileHeader from "./components/MobileHeader.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import { MobileTab } from "./components/MobileTab.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <MobileHeader />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="howitworks">
          <Process />
        </section>

        <section id="faq">
          <FAQSection />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section>
          <Gallery />
        </section>
        <Footer />
        <MobileTab />
      </div>
    </>
  );
};

export default App;
