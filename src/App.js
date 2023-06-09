import Education from "./components/education";
import Footer from "./components/footer";
import HomeSection from "./components/home";
import ResponsiveAppBar from "./components/navbar";
import ProjectSection from "./components/projects";
import Skills from "./components/skills";
import './index.css';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <HomeSection/>
      <Education/>
      <Skills/>
      <ProjectSection/>
      <Footer/>
    </div>
  );
}

export default App;
