import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-(--tertiary)/10 gap-14">
        <Hero />

        <Values />
      </div>
    </>
  );
}
