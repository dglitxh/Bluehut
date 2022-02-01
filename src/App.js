import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import "./index.css"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { aos_settings } from './components/assets/settings'


AOS.init(aos_settings);
function App() {
  return (
    <div className="App">

      <Navbar/>
      <Hero/>
      <Services/>
      <Skills/>
      <About/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
