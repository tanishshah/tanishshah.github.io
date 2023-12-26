import './App.css';
import NavbarComp from "./Components/NavbarComp";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Research from './Components/Research';
import Experience from './Components/Experience';
function App() {
  return (
    <div className="App">
      <NavbarComp/> 
      <Intro/>
      <About/>
      <Experience/>
      <Research/>
    </div>
  );
}

export default App;
