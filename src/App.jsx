import { useState } from 'react'
import './App.css'
import Navbarapp from './pages/Navbar'
import Cards from './pages/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbarapp/>
<Cards/>
      
       </>
  )
}

export default App
