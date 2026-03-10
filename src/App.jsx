import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #fff0f5; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float0 { 0%,100% { transform: translateY(0px) rotate(-8deg); } 50% { transform: translateY(-14px) rotate(4deg); } }
        @keyframes float1 { 0%,100% { transform: translateY(-8px) rotate(6deg); } 50% { transform: translateY(8px) rotate(-4deg); } }
        section { width: 100%; }
      `}</style>

      <Navbar scrolled={scrolled} />
      <Hero />
      <Menu />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}