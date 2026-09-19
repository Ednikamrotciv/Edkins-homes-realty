import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import Land from "./components/Land";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <Land />
        <About />
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
