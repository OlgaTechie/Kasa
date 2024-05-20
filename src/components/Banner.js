import React from "react";
import './Banner.scss'

function Banner({ imageUrl, title = "", opacity }) {
    const bannerStyle = {
        backgroundImage: `url(${imageUrl})`,
    };

    const overlayStyle = {
        backgroundColor: `rgba(0, 0, 0, ${opacity})`
    };

    // Séparer le titre en deux parties à la virgule
    const [firstPart, secondPart] = title.split(',');

    return (
        <div className="banner" style={bannerStyle}>
            <div className="overlay" style={overlayStyle}></div>
            {title && (
                <h1>
                    <span className="desktop">{title}</span>
                    <span className="mobile">
                        {firstPart},
                        <br/>
                        {secondPart}
                    </span>
                </h1>
            )};
        </div>
    );
}
export default Banner;