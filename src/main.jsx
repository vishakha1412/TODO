import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {   createBrowserRouter, RouterProvider } from 'react-router'
import { Route } from 'react-router'
import User from './components/User.jsx'
import { createRoutesFromElements } from 'react-router'
import  Update  from './components/Update.jsx'
import AddData from './components/AddData.jsx'
import { About } from './components/About.jsx'
 
 
  const router=createBrowserRouter( 
    createRoutesFromElements([
      <Route path='/' element={<App/>}>
          <Route path='/tasks' element={<User/>}/> 
          
          <Route path='/add' element={<AddData/>}/>
           <Route path='/update/:id' element={<Update/>}/>
           <Route path='/about' element={<About/>}/>s
      </Route>
    ])
  )

 

 

createRoot(document.getElementById('root')).render(
 
  
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
    
)
