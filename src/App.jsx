import Nav from "./components/Nav";
import Hero from "./components/Hero";
import EventTicker from "./components/EventTicker";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <div className="grain" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <EventTicker />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
