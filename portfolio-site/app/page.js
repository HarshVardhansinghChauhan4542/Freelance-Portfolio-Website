import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import ClosingCTA from "../components/ClosingCTA";
import Footer from "../components/Footer";
import AmbientGradient from "../components/AmbientGradient";

export default function Home() {
  return (
    <>
      <Header />
      <AmbientGradient />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Achievements />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
