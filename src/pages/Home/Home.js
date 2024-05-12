import React from 'react';
import Header from '../../components/Layout/Header';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Layout/Footer';

function Home() {
    return (
        <div className='home-container'>
            <Header />
            <Banner imageUrl={('/banner_1.png')} title={"Chez vous, partout et ailleurs"} />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Home;