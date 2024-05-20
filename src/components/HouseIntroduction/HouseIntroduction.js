import React from "react";
import "./HouseIntroduction.scss";

function HouseIntroduction({ house }) {
    return (
        <div className="house-introduction">
            <div className="house-title">
                <h2>{house.title}</h2>
                <p className="house-location">{house.location}</p>
            </div>
        </div>
    )
}

export default HouseIntroduction;