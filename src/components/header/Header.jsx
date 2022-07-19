import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/photoprofile.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Badis Khachaa</h1>

        <CTA />
        <HeaderSocials />
        <div className=''>
          <img className='me' src={Me} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
