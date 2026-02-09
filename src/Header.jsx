import React from 'react'
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
        <a href="#">Use Cases</a>
        <a href="#"> Blog </a>
        <a href="#"> About </a>
      </div>
      <div className='btn-con'>
        <button><i class="fa-brands fa-apple"></i> Download for Mac</button>
      </div>
    </section>
  )
}

export default Header
