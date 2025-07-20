import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About"
import Skills from "./components/Skills"
import Services from './components/Services'
import Contact from "./components/Contact";

const App = () => {
  return (
    <>

      {/* New Folder */}

      <Navbar />
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;