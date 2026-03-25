import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import About from "./components/About";
import Features from "./components/Features";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-(--tertiary)/10 gap-14">
        <Hero />

        <Values />

        <About />

        <Features />
      </div>
    </>
  );
}
