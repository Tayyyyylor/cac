import './App.css'
import Header from '../src/components/header/Header'
import Slider from './components/slider/Slider'
import Bio from './components/bio/Bio'
import NonVerbal from './components/sections/NonVerbal'
import Verbal from './components/sections/Verbal'
import Ecrit from './components/sections/Ecrit'
import Services from './components/sections/Services'
import Temoignages from './components/temoignages/Temoignages'

function App() {

  return (
    <>
    <Header/>
    <Slider/>
    <Bio/>
    <NonVerbal/>
    <Verbal/>
    <Ecrit/>
    <Services/>
    <Temoignages/>
    </>
  )
}

export default App
