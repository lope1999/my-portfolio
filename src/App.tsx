import { ThemeContextProvider } from "./context/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import ProjectsSection from "./pages/ProjectsSection";
import { IconContext } from "react-icons";
import MainLayout from "./pages/MainLayout";
import TechStack from "./components/TechStack";
import ContactSection from "./pages/ContactSection";

// About Section – A clean, engaging section that highlights who you are.
// Projects Section – A sleek way to showcase your best work.
// Tech Stack Section – Highlight the technologies you use with cool animations.
// Contact Section – A professional yet inviting way for people to reach out.

function App() {
  return (
    <ThemeContextProvider>
      <IconContext.Provider value={{ size: "3rem" }}>
        <GlobalStyles />
        <MainLayout>
          <HeroSection />
          <AboutSection />
          <TechStack />
          <ProjectsSection />
          <ContactSection />
        </MainLayout>
      </IconContext.Provider>
    </ThemeContextProvider>
  );
}

export default App;
