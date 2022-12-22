import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import Navbar from '../Navbar/Navbar'
const Header = () => {
  return (
    <header className='header'>
        <img src={logo} className='header__logo'></img>
      <Link to='/'>
        <h3 className='header__title'>my dashboard</h3>
      </Link>

        <Navbar />
    </header>
  )
}

export default Header
