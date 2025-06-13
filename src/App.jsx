import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Contact />
    {/* <ShowcaseSection /> */}
    {/* <LogoShowcase /> */}
    {/* <FeatureCards /> */}
    <Experience />
    <TechStack />
    <Testimonials />
    <Footer />
  </>
);

export default App;
