import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import data from "../../data.json";

function FicheLogement() {
    const { id } = useParams(); // Récupérer l'ID de la maison à partir de l'URL
    const house = data.find(item => item.id === id);

    return (
        <div>
            <Header />
            <div className="house-details">
                <img src={house.cover} alt={house.title} />
                <h2>{house.title}</h2>
                <p>{house.description}</p>
                <p>{house.location}</p>
            </div>
            <Footer />
        </div>
    );
}
export default FicheLogement;