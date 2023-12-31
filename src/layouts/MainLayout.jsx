import React from 'react'
import Navber from './Navber'
import Footers from './Footers'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    <Footers/>
    </>
    
  )
}

export default MainLayout