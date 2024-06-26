import React from "react";
import Header from "../../components/Layout/Header";
import Banner from "../../components/Banner";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import Footer from "../../components/Layout/Footer";
import "./About.scss";

function About() {
    return (
        <div className="about-container">
            <Header />
            <Banner imageUrl={('/banner_2.png')} className="about-banner" opacity={0.3} />
            <div className="dropdowns-container_about">
                <DropDownMenu title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                <DropDownMenu title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <DropDownMenu title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <DropDownMenu title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
            <Footer />
        </div>
    )
}

export default About;