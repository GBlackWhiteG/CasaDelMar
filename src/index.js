import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import TopNav from './components/TopNav/TopNav';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import ExOffer from './components/ExOffer/ExOffer';
import Rooms from './components/Rooms/Rooms';
import Services from './components/Services/Services'
import Promotions from './components/Promotions/Promotions';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopNav />
    <Nav />
    <Header />
    <About />
    <ExOffer />
    <Rooms />
    <Services />
    <Promotions />
    <Contacts />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
