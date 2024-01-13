'react-router-dom'
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Home from './screens/Home/Home';
import Room from './screens/Room/Room';
import Rooms from './screens/Rooms/Rooms';
import Services from "./screens/Services/Services";
import Offers from "./screens/Offers/Offers";

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Rooms />} path="/rooms" />
                <Route element={<Room />} path="/rooms/:id" />
                <Route element={<Services />} path="/services" />
                <Route element={<Offers />} path="/offers" />

                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;