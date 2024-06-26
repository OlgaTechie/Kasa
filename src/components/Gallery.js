import React from "react";
import HouseCard from "./HouseCard/HouseCard";
import data from "../data.json";
import './Gallery.scss';

function Gallery() {
    return (
        <div className="gallery">
            {data.map((house) => (
                <HouseCard key={house.id} house={house} />
            ))}
        </div>
    );
}
export default Gallery;