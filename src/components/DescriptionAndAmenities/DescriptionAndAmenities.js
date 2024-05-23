import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import AmenitiesList from "./AmenitiesList";
import "./DescriptionAndAmenities.scss";

function DescriptionAndAmenities({ description, amenities }) {
    return (
        <div className="dropdowns-container_logement">
            <DropDownMenu className="description" title="Description" content={description} />
            <DropDownMenu className="amenities" title="Équipements" content={<AmenitiesList amenities={amenities} />} />
        </div>
    )
}

export default DescriptionAndAmenities;