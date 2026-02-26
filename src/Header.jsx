import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/Logo-Top.svg' 
import './Header.css'

const Header = () => {
  return (
    <section className='header'>
      <div className='logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='links'>
        <a href="#">Template</a>
        <Link to="/create-use-case">Use Cases</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about-us">About Us</Link>
      </div>
      <div className='btn-con'>
         <button><i className="fa-brands fa-apple"></i> Download for Mac</button>
      </div>
    </section>
  )
}

export default Header
