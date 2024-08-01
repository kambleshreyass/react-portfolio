import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";



const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Projects/>
      <Timeline/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App