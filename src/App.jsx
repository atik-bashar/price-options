
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
     <DaisyNav></DaisyNav>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <h1 className='text-6xl'>Hello</h1>
    </>
  )
}

export default App
