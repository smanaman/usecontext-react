import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className="navbar">
<h2>Logo</h2>    
  <div className="menu-toggle" onclick="toggleMenu()">
    <div />
    <div />
    <div />
  </div>
  <div className="menu" id="menu">
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    
  </div>
</nav>

    </>
  )
}

export default Navbar