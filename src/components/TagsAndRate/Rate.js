import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

function Rate({ rating }) {
    return (
        <div className="rate">
            {[...Array(parseInt(rating))].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="active-star" />
            ))}
            {[...Array(5 - parseInt(rating))].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="inactive-star" />
            ))}
        </div>
    );
};

export default Rate;