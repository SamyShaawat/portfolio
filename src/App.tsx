import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/sections/Navbar.tsx";
import { darkTheme } from "./utils/Themes.ts";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/sections/Hero.tsx";
import { lazy, Suspense } from "react";
import SectionSkeleton from "./components/SectionSkeleton.tsx";

// Below-the-fold sections load as separate chunks.
const Skills = lazy(() => import("./components/sections/Skills.tsx"));
const Experience = lazy(() => import("./components/sections/Experience.tsx"));
const Education = lazy(() => import("./components/sections/Education.tsx"));
const Projects = lazy(() => import("./components/sections/Projects.tsx"));
const Research = lazy(() => import("./components/sections/Research.tsx"));
const Footer = lazy(() => import("./components/sections/Footer.tsx"));
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
                <Suspense fallback={<SectionSkeleton />}>
                <Skills />
              </Suspense>
                <Suspense fallback={<SectionSkeleton />}>
                <Experience />
              </Suspense>
              </Wrapper>
              <Suspense fallback={<SectionSkeleton />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<SectionSkeleton />}>
                <Research />
              </Suspense>
              <Wrapper>
                <Suspense fallback={<SectionSkeleton />}>
                <Education />
              </Suspense>
              </Wrapper>
            </div>
          </AnimatePresence>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
