import React from 'react';
import './Header.scss'
import logo from '../../assets/logo_kasa.png'
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt='Logo' />
                    </Link>
                </div>
                <nav className='navigation'>
                    <ul>
                        <li>
                            <Link to='/' className={location.pathname === '/' ? 'active-link' : ''}>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>A Propos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;