import React from "react";
import logo from '../../assets/LOGO.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className='logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;