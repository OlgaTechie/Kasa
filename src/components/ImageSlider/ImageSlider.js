import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ImageSlider({ pictures, currentImageIndex, handlePrevImage, handleNextImage, setCurrentImageIndex }) {
    
    // Configuration du carrousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentImageIndex(next),
    };

    return (
        <div>
            <Slider {...settings} initialSlide={currentImageIndex}>
                {pictures.map((picture, index) => (
                        <div key={index}>
                            <img src={picture} alt={`House ${index}`} />
                        </div>
                    ))}
                </Slider>
                <div className="image-navigation">
                    <div className="icon-container left" onClick={handlePrevImage}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="icon-container right" onClick={handleNextImage}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
        </div>
    )
}

export default ImageSlider;