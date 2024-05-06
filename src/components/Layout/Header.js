import React from 'react';

import logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <nav className='navigation'>
                    <ul>
                        <li><Link to='/'>Accueil</Link></li>
                        <li><Link to="/about">A Propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;