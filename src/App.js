import About from "./Component/About";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import Projects from "./Component/Projects";

function App() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Header />
      {/* About */}
      <About />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
