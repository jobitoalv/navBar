import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt="logo"/>
        <button className='nav-toggle'>
          <FaBars/>
        </button>
      </div>
      <div className='links-container show-container'>
        <ul className='link'>
          <li>
            <a href='#'>home</a>
            <a href='#'>about</a>
            <a href='#'>contact</a>
            <a href='#'>product</a>
          </li>
        </ul>
      </div>
      <ul className='social-icon'></ul>
    </div>
  </nav>
}

export default Navbar
