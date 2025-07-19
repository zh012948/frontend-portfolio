import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About"
import Skills from "./components/Skills"
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
    </>
  );
};

export default App;