import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services"
<<<<<<< HEAD
import { AnimatePresence } from 'framer-motion';
=======
import Pricing from "./components/Pricing"
>>>>>>> main
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
<<<<<<< HEAD
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
=======

      <Navbar/>
      <Hero/>
      <Services/>
      <Skills/>
      <About/>
      <Pricing/>
      <Contact/>
      <Footer/>
>>>>>>> main
    </div>
  );
}

export default App;
