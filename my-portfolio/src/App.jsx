import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Sections/Hero";
import Projects from "./components/Sections/Projects";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Layout/Footer";
import AnimatedBackground from "./components/UI/AnimatedBackground";
import MouseCursor from "./components/UI/MouseCursor";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="app" style={{ position: "relative", minHeight: "100vh" }}>
        <AnimatedBackground />
        <MouseCursor />
        <Navbar />

        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
