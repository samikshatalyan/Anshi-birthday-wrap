import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import { Gallery, Ranking, Letter, Finale } from "./components/Gallery";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Gallery />
      <Ranking />
      <Letter />
      <Finale />
    </div>
  );
}

export default App;