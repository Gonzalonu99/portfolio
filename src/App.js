import AboutMe from "./components/about";
import HomeSection from "./components/home";
import NavBar from "./components/navbar";
import ProjectSection from "./components/projects";
import Skillset from "./components/skill";

function App() {
  return (
    <div>
      <NavBar/>
      <HomeSection/>
      <AboutMe/>
      <Skillset/>
      <ProjectSection/>
    </div>
  );
}

export default App;
