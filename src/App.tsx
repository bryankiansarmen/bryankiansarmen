import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.css";

// Lazy load below-the-fold components
const About = React.lazy(() => import("./components/About/About"));
const Experience = React.lazy(() => import("./components/Experience/Experience"));
// const Project = React.lazy(() => import("./components/Project/Project"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

const App = () => {
  return (
    <>
      <a href="#main-content" className="sr-only" aria-label="Skip to main content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Home />
        <Suspense fallback={<div style={{ padding: '5rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>Loading...</div>}>
          <About />
          <Experience />
          {/* <Project /> */}
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
