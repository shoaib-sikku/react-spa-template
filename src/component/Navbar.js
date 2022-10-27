import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'><img src={logo} className='img-fluid logo'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="_link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about-us' className="_link">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='explore-foods' className="_link">Explore Foods</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='reviews' className="_link">Reviews</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to='faq' className="_link">FAQ</NavLink>
        </li>
        <li className="nav-item mt-md-1 mt-2">
          <NavLink to='contact' className="outBtn">1200 345 123</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
