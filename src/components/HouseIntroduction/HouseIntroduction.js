import React from "react";

function HouseIntroduction({ house }) {
    return (
        <div className="house-introduction">
            <div className="house-title">
                <h2>{house.title}</h2>
                <p className="house-location">{house.location}</p>
            </div>
            <div className="host-info">
                <p className="host-name">
                    {house.host.name.split(" ")[0]} <br />
                    {house.host.name.split(" ")[1]}
                </p>
                <img src={house.host.picture} alt={house.host.name} className="host-image" />
            </div>
        </div>
    )
}

export default HouseIntroduction;