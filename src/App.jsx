import './App.css'
import Header from '../src/components/header/Header'
import Slider from './components/slider/Slider'
import Bio from './components/bio/Bio'
import NonVerbal from './components/sections/NonVerbal'
import Verbal from './components/sections/Verbal'
import Ecrit from './components/sections/Ecrit'
import Services from './components/services/Services'
import Temoignages from './components/temoignages/Temoignages'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

function App() {
 
  return (
    <>
    <Header />
    <Slider/>
    <Bio/>
    <NonVerbal/>
    <Verbal/>
    <Ecrit/>
    <Services/>
      <Temoignages />
      <Contact/>
    <Footer/>
    </>
  )
}

export default App
