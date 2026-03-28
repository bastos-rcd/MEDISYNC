import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import About from "./components/About";
import Features from "./components/Features";
import Prices from "./components/Prices";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col gap-10 lg:gap-14">
        <Hero />

        <Values />

        <About />

        <Features />

        <Prices />
      </div>

      <Footer />
    </>
  );
}
