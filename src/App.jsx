import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import  theme from './theme'
import './App.css';

import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import Experience from "./components/Experience";
import Academics from "./components/academics";
import ProjectDetails from "./components/projects/projectDetails";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? theme.themes.dark : theme.themes.light}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />

          <Skills />
          
          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          <Academics />

          <Contact />

          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
