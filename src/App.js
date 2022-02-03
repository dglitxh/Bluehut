import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services"
import { AnimatePresence } from 'framer-motion';
import "./index.css"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { aos_settings } from './components/assets/settings'
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";


AOS.init(aos_settings);
function App() {
  return (
    <div className="App">
<HashRouter>
  <React.Fragment>
  <Navbar/>
  <AnimatePresence exitBeforeEnter>
    <Routes>
      <Route path="/" element={
      <div>
        <Hero/>
        <Skills/>
        </div>
      }
      />
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/contact" element={ <Contact/>}/>
    </Routes>
    </AnimatePresence>
    <Footer/>
  </React.Fragment>
</HashRouter>
    </div>
  );
}

export default App;
