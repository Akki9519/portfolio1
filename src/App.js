import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Qualify from './components/Qualification/Qualify';
import Achieve from './components/Achievement/Achievement';
import './App.css'
import Experience from './components/Experience/Experience'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <>
   
    <div id='top' className={`${themeName} app`}>
      {/* <div className="game">
        <game/>
      </div> */}
      <Header />
      <main>
        <About />
        <Qualify/>
        <Projects />
        <Experience/>
        <Skills />
        <Achieve/>
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
    </>
  )
}

export default App
