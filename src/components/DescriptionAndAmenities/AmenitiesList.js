import React from "react"
import "./DescriptionAndAmenities.scss";

function AmenitiesList({ amenities }) {
    return (
        <div className="amenities-list">
            {amenities.map((amenity, index) =>(
                <p key={index} className="amenity-item">{amenity}</p>
            ))}
        </div>
    )
}

export default AmenitiesList;