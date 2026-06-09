import React, { useState, useEffect } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";
import CaseStudy from "./components/casestudy/CaseStudy";
import Studio from "./studio/Studio";

// Lightweight hash routing — keeps the no-router setup but lets the private
// #/studio screen take over the whole viewport.
const useHashRoute = () => {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
};

const App = () => {
  const hash = useHashRoute();

  // Exact route (with optional query/subpath) — avoids #/studioX false matches.
  if (hash === "#/studio" || hash === "#studio" || hash.startsWith("#/studio/") || hash.startsWith("#/studio?")) {
    return <Studio />;
  }

  return (
    <LanguageProvider>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <CaseStudy />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </LanguageProvider>
  );
};

export default App;
