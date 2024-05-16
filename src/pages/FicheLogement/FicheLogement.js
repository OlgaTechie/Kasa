import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import data from "../../data.json";
import "./FicheLogement.scss";
import DescriptionAndAmenities from "../../components/DescriptionAndAmenities/DescriptionAndAmenities";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import HouseIntroduction from "../../components/HouseIntroduction/HouseIntroduction";
import TagsAndRate from "../../components/TagsAndRate/TagsAndRate";

function FicheLogement() {
    const { id } = useParams(); // Récupérer l'ID de la maison à partir de l'URL
    const house = data.find(item => item.id === id);    

    return (
        <div>
            <Header />
            <div className="house-details">
                <ImageSlider id={id} data={house} />
                <HouseIntroduction house={house} />
                <TagsAndRate tags={house.tags} rating={house.rating} />
                <DescriptionAndAmenities description={house.description} amenities={house.equipments} />
            </div>
            <Footer />
        </div>
    );
}

export default FicheLogement;