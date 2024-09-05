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

function isNighttime() {
  const currentHour = new Date().getHours(); // Get the current hour (0-23)
  
  // Define daylight hours (e.g., 6 AM to 6 PM)
  const startDay = 6; // 6 AM
  const endDay = 18; // 6 PM
  
  // Check if current hour is within daylight hours
  return !(currentHour >= startDay && currentHour < endDay);
}

function App() {
  const [darkMode, setDarkMode] = useState(isNighttime());
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? theme.themes.dark : theme.themes.light}>
      <Router >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
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
