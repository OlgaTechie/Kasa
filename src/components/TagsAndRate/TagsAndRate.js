import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

function TagsAndRate({ tags, rating}) {
    return (
        <div className="tags-rate">
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="rate">
                {[...Array(parseInt(rating))].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="active-star" />
                ))}
                {[...Array(5 - parseInt(rating))].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="inactive-star" />
                ))}
            </div>
        </div>
    )
}

export default TagsAndRate;