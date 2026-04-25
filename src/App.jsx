import React, { lazy, Suspense } from "react";
import MobileHeader from "./components/MobileHeader.jsx";
import AboutSection from "./components/AboutSection.jsx";
// import Services from "./components/Services.jsx";
// import Process from "./components/Process.jsx";
// import FAQSection from "./components/FAQSection.jsx";
// import Testimonials from "./components/Testimonials.jsx";
// import Gallery from "./components/Gallery.jsx";
// import Footer from "./components/Footer.jsx";
import { MobileTab } from "./components/MobileTab.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";

const Services = lazy(() => import("./components/Services.jsx"));
const Process = lazy(() => import("./components/Process.jsx"));
const FAQSection = lazy(() => import("./components/FAQSection.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const Gallery = lazy(() => import("./components/Gallery.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

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
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <section id="services">
          <Services />
        </section>
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <section id="howitworks">
          <Process />
        </section>
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <section id="faq">
          <FAQSection />
        </section>
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <section id="testimonials">
          <Testimonials />
        </section>
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Footer />
        </Suspense>
        <FloatingButtons/>
        <MobileTab />
      </div>
    </>
  );
};

export default App;
