import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipie from './pages/recipie/Recipie'
import NavBar from './components/NavBar'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

function App() {
  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create/>} />
          <Route path='/search' element={<Search/>}/>
          <Route path='/recipie/:id' element={<Recipie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
