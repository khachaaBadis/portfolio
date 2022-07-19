import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
          href="https://www.linkedin.com/in/khachaa-badis-790bab244/"
          
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/khachaaBadis' >
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
