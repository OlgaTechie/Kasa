import React from "react";
import Header from "../../components/Layout/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Layout/Footer";

function About() {
    return (
        <div className="about-container">
            <Header />
            <Banner imageUrl={('/banner_2.png')} className="about-banner" opacity={0.3} />
            <Footer />
        </div>
    )
}

export default About;