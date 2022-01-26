import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About"
import "./index.css"
import AOS from 'aos'
import 'aos/dist/aos.css';


AOS.init({
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
