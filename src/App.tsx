import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/sections/Navbar.tsx";
import { darkTheme } from "./utils/Themes.ts";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/sections/Footer.tsx";
import Hero from "./components/sections/Hero.tsx";
import Skills from "./components/sections/Skills.tsx";
import Experience from "./components/sections/Experience.tsx";
import Education from "./components/sections/Education.tsx";
// import Projects from "./components/sections/Projects.tsx";
// import { useState } from "react";
// Import the Project type (adjust the path as needed)
// import type { Project } from "./data/constants.ts";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  // const [openModal, setOpenModal] = useState<{
  //   state: boolean;
  //   project: Project | null;
  // }>({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <AnimatePresence>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              {/* <Projects /> */}
              <Wrapper>
                <Education />
              </Wrapper>
            </div>
          </AnimatePresence>
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
