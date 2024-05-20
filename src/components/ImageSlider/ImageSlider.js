import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./ImageSlider.scss";

function ImageSlider({ data }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { pictures } = data; 
    const totalImages = pictures.length;

    const handlePrevImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1);
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => prevIndex === pictures.length - 1 ? 0 : prevIndex + 1);
    };

    const renderPagination = () => {
        if (totalImages === 1 ) return null;
        return (
            <div className="pagination">
                {`${currentImageIndex + 1}/${totalImages}`}
            </div>
        );
    };

    const renderLeftArrow = () => {
        if (totalImages === 1) return null;
        return (
            <div className="icon-container left" onClick={handlePrevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );
    };

    const renderRightArrow = () => {
        if (totalImages === 1) return null;
        return (
            <div className="icon-container right" onClick={handleNextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        );
    };

    return (
        <div className="image-slider">
            <div className="image-container">
                <img src={pictures[currentImageIndex]} alt={`House ${currentImageIndex}`} />
                <div className="image-navigation">
                    {renderLeftArrow()}
                    {renderRightArrow()}
                </div>
                {renderPagination()}
            </div>  
        </div>
    );
};

export default ImageSlider;