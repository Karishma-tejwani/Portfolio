import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
