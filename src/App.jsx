import { useState } from 'react'
import Navbar from './components/NvaBar'
import { Outlet } from 'react-router'
 
 

function App() {
 

  return (
     <>
     <Navbar/>
     <Outlet/>
     </>
  )
}

export default App
