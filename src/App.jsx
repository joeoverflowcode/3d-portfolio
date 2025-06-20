import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
// import Contact from "./sections/Contact";
import About from "./sections/About";
import Experience from "./sections/Experience";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import StarsCanvas from "./components/models/contact/Stars";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

const App = () => (
  <>
    <Navbar />
    <div className="relative z-0">
      <Hero />
      <StarsCanvas />
    </div>
    {/* <Contact /> */}
    {/* <ShowcaseSection /> */}
    {/* <LogoShowcase /> */}
    {/* <FeatureCards /> */}
    <Skills/>
    <Experience />
    <About />
    <Testimonials />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </>
);

export default App;
