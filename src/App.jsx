import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

const App = () => {
  return (
    <>
      {/* Header section */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Projects section */}
      <Projects />

      {/* About section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Contact section */}
      <Contact />

      {/* Footer section */}
      <Footer />
    </>
  );
};

export default App;
