import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import "./NotFound.scss";

const ResponsiveBreak = ({ isMobile }) => {
    return isMobile ? <br /> : null;
};

function NotFound () {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNavigateToHome = () => {
        navigate("/");
    };

    return (
        <div className="notfound-container">
            <Header />
            <div className="notfound-content">
                <h1>404</h1>
                <div className="notfound-message">
                    <p>Oups! La page que<ResponsiveBreak isMobile={isMobile} /> vous demandez n'existe pas.</p>
                </div>
                <a href="/" onClick={(e) => { e.preventDefault(); handleNavigateToHome(); }}>Retourner sur la page d’accueil</a>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;