import React from 'react'
import uptraderLogo from '../../assets/icons/uptr-logo.svg'
const Footer = () => {
  return (
    <footer className='footer'>
      <p className="footer__copyright">&copy; {new Date().getFullYear()} Mitka.Dev, special for <a target='_blank' href='https://uptrader.io/en/'><img className='footer__logo' src={uptraderLogo}></img></a></p>
    </footer>
  )
}

export default Footer
