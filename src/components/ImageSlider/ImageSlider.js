import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./ImageSlider.scss";

function ImageSlider({ data }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { pictures } = data; 

    const handlePrevImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1);
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex === pictures.length - 1 ? 0 : prevIndex + 1);
    };

    return (
        <div className="image-slider">
            <div className="image-container">
                <img src={pictures[currentImageIndex]} alt={`House ${currentImageIndex}`} />
                <div className="image-navigation">
                    <div className="icon-container left" onClick={handlePrevImage}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="icon-container right" onClick={handleNextImage}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
            </div>
            </div>
                   
        </div>
    )
}

export default ImageSlider;