import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
     <DaisyNav></DaisyNav>
     <PriceOptions></PriceOptions>
     <h1 className='text-6xl'>Hello</h1>
    </>
  )
}

export default App
