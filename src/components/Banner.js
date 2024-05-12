import React from "react";
import './Banner.scss'

function Banner({ imageUrl, title, opacity }) {
    const bannerStyle = {
        backgroundImage: `url(${imageUrl})`,
    };

    const overlayStyle = {
        backgroundColor: `rgba(0, 0, 0, ${opacity})`
    };

    return (
        <div className="banner" style={bannerStyle}>
            <div className="overlay" style={overlayStyle}></div>
            {title && <h1>{title}</h1>}
        </div>
    );
}
export default Banner;