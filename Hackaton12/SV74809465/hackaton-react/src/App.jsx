import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import './App.css'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
