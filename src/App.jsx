import { useState } from 'react'
import './App.css'
import Navbarapp from './pages/Navbar'
import Cards from './pages/Cards'
import UncontrolledExample from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbarapp/>
<UncontrolledExample/>
  {/* <Cards/> */}
      
       </>
  )
}

export default App
