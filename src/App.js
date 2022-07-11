import AboutMe from "./components/about";
import HomeSection from "./components/home";
import NavBar from "./components/navbar";
import Skillset from "./components/skill";

function App() {
  return (
    <div>
      <NavBar/>
      <HomeSection/>
      <AboutMe/>
      <Skillset/>
    </div>
  );
}

export default App;
