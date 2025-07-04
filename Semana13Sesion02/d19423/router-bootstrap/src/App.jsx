import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './components/feature/index'
import About from './components/feature/index/about'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
  )
}

export default App
