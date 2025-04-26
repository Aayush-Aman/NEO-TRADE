import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            <Navbar />
            <Awards />
            <Education />
            <Hero />
            <Pricing />
            <Stats />
            <OpenAccount />
            <Footer />
        </>
     );
}

export default HomePage;