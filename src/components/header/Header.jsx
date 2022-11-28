import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>Aman Maharjan</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
