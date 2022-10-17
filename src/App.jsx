import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Scroll from './components/Scroll'


const App = () => {


  return (
    <div className="App scroll-smooth">
      
      <div className="mx-auto max-w-7xl">
    <Navbar />
      </div>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Scroll/>
    </div>
    

    
  
  )
}

export default App
