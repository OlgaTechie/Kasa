import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import data from "../../data.json";
import "./FicheLogement.scss";
import DescriptionAndAmenities from "../../components/DescriptionAndAmenities/DescriptionAndAmenities";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import HouseIntroduction from "../../components/HouseIntroduction/HouseIntroduction";
import HostInformation from "../../components/HostInformation/HostInformation";
import Tags from "../../components/TagsAndRate/Tags";
import Rate from "../../components/TagsAndRate/Rate";

function FicheLogement() {
    const { id } = useParams(); // Récupérer l'ID de la maison à partir de l'URL
    const house = data.find(item => item.id === id);

    // Vérifier si house est défini et si la propriété tags existe
    if (!house || !house.tags) {
    return <Navigate to="/not-found" />
    }

    const isMobile = window.innerWidth <= 768;

    return (
        <div>
            <Header />
            <div className="house-details">
                <ImageSlider id={id} data={house} />
                <div className={`house-and-host-information ${isMobile ? 'responsive' : ''}`}>
                    <div className="house-intro">
                        <HouseIntroduction house={house} />
                    </div>
                    <div className={`host ${isMobile ? 'rate-host-container' : ''}`}>
                        <HostInformation house={house} />
                    </div>
                        <div className="tags">
                            <Tags tags={house.tags} />
                        </div>
                        <div className="rate">
                            <Rate rating={house.rating} />
                        </div>
                </div>
                <DescriptionAndAmenities description={house.description} amenities={house.equipments} />
            </div>
            <Footer />
        </div>
    );
}

export default FicheLogement;