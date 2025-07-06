import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './components/feature/index'
import About from './components/feature/index/about'
import MainLayout from './components/MainLayout'
import Profile from './components/feature/auth/Profile'
import ProtectedRoute from './components/feature/auth/ProtectedRoute'
import Admin from './components/feature/index/Admin'
import NotFound from './components/feature/index/NotFound'
import Login from './components/feature/auth/login'

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Index/>} />
    //   <Route path='/about' element={<About/>} />
    // </Routes>

    <Routes>
      <Route path='/' element={<MainLayout/>}/>
      <Route index element={<Index/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='profile/:username' element={<Profile/>}/>
      <Route path='login' element={<Login/>}/>
      <Route
        path='admin'
        element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
