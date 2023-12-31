import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navber = () => {
  return (
   
    <nav id="navbar">
        <div class="container">
            <div class="nav_wrapper">
            
                <div class="menu">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                            
                          
                        </li>
                        <li>
                       
                        <NavLink to="about">About</NavLink>
                        </li>
                        <li>
                        
                        <NavLink to="service">Service</NavLink>
                        </li>
                        <li>
                       
                        <NavLink to="portfolio">Portfolio</NavLink>
                            
                        </li>
                        <li>
                       
                        <NavLink to="price">Price</NavLink>
                            
                        </li>
                        <li>
                       
                        <NavLink to="blogs">Blogs</NavLink>
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
    </nav>
  )
}

export default Navber