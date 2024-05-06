import React from 'react';
import Header from '../../components/Layout/Header';
import Banner from '../../components/Banner';

function Home() {
    return (
        <div className='home-container'>
            <Header />
            <Banner imageUrl={require('../../assets/Image source 1.png')} title={"Chez vous, partout et ailleurs"} />
        </div>
    );
}

export default Home;