import "./index.css";
import Navbar from "@/components/Navbar";
import Landing from "@/pages/Landing";
import Projects from "@/pages/Projects";

function App() {
  return (
    <div className="bg-background text-foreground scroll-smooth">
      <Navbar />
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
