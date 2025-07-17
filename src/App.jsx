import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About"

const App = () => {
  return (
    <>

      {/* New Folder */}

      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about"></section>
      <About />

    </>
  );
};

export default App;