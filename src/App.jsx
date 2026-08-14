import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import StickyMobileBar from "./components/StickyMobileBar.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ScrapMaterials from "./pages/ScrapMaterials.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollManager />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/scrap-materials" element={<ScrapMaterials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <StickyMobileBar />
      <FloatingWhatsApp />
    </>
  );
}
