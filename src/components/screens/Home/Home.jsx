import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import ExOffer from './ExOffer/ExOffer';
import Rooms from './Rooms/Rooms';
import Services from './Services/Services'
import Promotions from './Promotions/Promotions';
import Contacts from './Contacts/Contacts';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <ExOffer />
            <About />
            <Rooms />
            <Services />
            <Promotions />
            <Contacts />
        </>
    );
}

export default Home;