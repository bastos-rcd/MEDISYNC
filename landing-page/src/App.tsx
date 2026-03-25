import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-[color-mix(in_srgb,var(--tertiary),transparent_80%)]">
      <Header />

      <Hero />
    </div>
  );
}
