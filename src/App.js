import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import { AnimatePresence } from 'framer-motion'
import "./index.css"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { aos_settings } from './components/assets/settings'
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";


AOS.init(aos_settings);


function App() {
  const location = useLocation();


  return (
    <div className="App">
  <React.Fragment>
  <Navbar/>
  <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Hero/>}
      />
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/contact" element={ <Contact/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
    </Routes>
    </AnimatePresence>
    <Footer/>
  </React.Fragment>

    </div>
  );
}

export default App;
