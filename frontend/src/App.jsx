import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navabar'
import Sidebar from './components/Sidebar'
import LogoIntro from './components/LogoIntro'

function App() {

  return (
    <>
      <LogoIntro />
      <Navbar />
      <Sidebar />

    </>
  )
}

export default App
