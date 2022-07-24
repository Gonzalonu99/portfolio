import AboutMe from "./components/about";
import FooterSection from "./components/footer";
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
      <FooterSection/>
    </div>
  );
}

export default App;
