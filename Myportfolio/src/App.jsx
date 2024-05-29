import { ToastContainer } from "react-toastify"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Education from "./components/Education/Education"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Project/Projects"
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
