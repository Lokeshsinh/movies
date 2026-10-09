import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navabar'
import Sidebar from './components/Sidebar'
import LogoIntro from './components/LogoIntro'
// import Home from '../src/components/Home/Home'
import Movies from './components/moviesPage/Movies'
import Series from './components/series/Series'
import Home from './components/Home/Home'
import Kids from './components/Kids/kids'
function App() {

  return (
    <>
      <BrowserRouter>
        <LogoIntro />
        <Navbar />
        <div className="mainFlex">
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/series' element={<Series />} />
            <Route path='/kids' element={<Kids />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
