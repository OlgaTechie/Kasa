import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./DescriptionAndAmenities.scss";

function DescriptionAndAmenities({ description, amenities }) {
    return (
        <div className="dropdowns-container_logement">
            <DropDownMenu className="description" title="Description" content={description} />
            <DropDownMenu className="amenities" title="Équipements" content={<AmenitiesList amenities={amenities} />} />
        </div>
    )
}

function AmenitiesList({ amenities }) {
    return (
        <div className="amenities-list">
            {amenities.map((amenity, index) =>(
                <p key={index} className="amenity-item">{amenity}</p>
            ))}
        </div>
    )
}

export default DescriptionAndAmenities;