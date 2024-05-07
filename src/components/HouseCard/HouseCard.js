import React from "react";
import { Link } from "react-router-dom";

function HouseCard({ house }) {
    return (
        <div className="house-card">
            <Link to={`/fiche-logement/${house.id}`}>
                <img src={house.cover} alt={house.title} />
                <h2>{house.title}</h2>
            </Link>
        </div>
    );
}

export default HouseCard;