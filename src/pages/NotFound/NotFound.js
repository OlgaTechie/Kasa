import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import "./NotFound.scss";

function NotFound () {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate("/");
    };

    return (
        <div className="notfound-container">
            <Header />
            <div className="notfound-content">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/" onClick={(e) => { e.preventDefault(); handleNavigateToHome(); }}>Retourner sur la page d’accueil</a>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;