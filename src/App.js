import "./App.css";
import { ContextToggle } from "./Context";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <ContextToggle.Provider value={{ toggle, setToggle }}>
        <Navbar />
        <Header />
        <Projects />
        <Footer />
      </ContextToggle.Provider>
    </>
  );
}

export default App;
