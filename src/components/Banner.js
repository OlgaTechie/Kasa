import React from "react";

function Banner({ imageUrl, title }) {
    return (
        <div className="banner">
            <img src={imageUrl} alt="Banner" />
            {title && <h1>{title}</h1>}
        </div>
    );
}
export default Banner;