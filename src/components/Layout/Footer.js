import React from "react";
import logo from '../../assets/logo_kasa.png';
import './Footer.scss';

function Footer() {
    const copyrightText = "© 2020 Kasa. All rights reserved";
    
    const splitIndex = copyrightText.indexOf("All") + 3;
    const firstPart = copyrightText.substring(0, splitIndex);
    const secondPart = copyrightText.substring(splitIndex);
    

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className='logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <p>
                    <span className="desktop">{copyrightText}</span>
                    <span className="mobile">
                        {firstPart}
                        <br/>
                        {secondPart}
                    </span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;