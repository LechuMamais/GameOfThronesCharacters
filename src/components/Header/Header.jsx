import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='header-container'>
        <header className="header">
            <div id='header-home'>
                <Link to='/'>
                <img id='header-logo' src="/assets/flaticon_GOT.png" alt="Logo" />
                <h1 className="header-title">
                    
                    <span className="header-title-text">
                        Game of Thrones Characters
                    </span>
                </h1>
                </Link>
            </div>

            <div className='header-family-flags-container'>
                <img className='header-family-flags-img' src="assets/flags.webp" alt="Family Flags" />
            </div>
        </header>
    </div>
  )
}

export default Header