import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Price from './pages/Price';
import Blogs from './pages/Blogs';

import MainLayout from './layouts/MainLayout';
import Error from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<MainLayout/>}>
    <Route path ='/' element={<Home/>}/>
    <Route path ='/about' element={<About/>}/>
    <Route path ='/service' element={<Service/>}/>
    <Route path ='/portfolio' element={<Portfolio/>}/>
    <Route path ='/price' element={<Price/>}/>
    <Route path ='/blogs' element={<Blogs/>}/>
    </Route>
    <Route path='*' element={<Error/>}/>
    </>
  )
);

function App() {
 

  return (
   <RouterProvider 
   router={router}
   />

  )
}

export default App
