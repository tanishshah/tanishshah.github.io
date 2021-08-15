import './App.css';
import Navi from "./Components/Navi";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Navi/> 
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
