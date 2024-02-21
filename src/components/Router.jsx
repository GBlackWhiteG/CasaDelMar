'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Home from './screens/Home/Home';
import Room from './screens/Room/Room';
import Rooms from './screens/Rooms/Rooms';
import Services from "./screens/Services/Services";
import Offers from "./screens/Offers/Offers";
import Reservation from "./screens/Reservation/Reservation";

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <main>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Rooms />} path="/rooms" />
                    <Route element={<Room />} path="/rooms/:id" />
                    <Route element={<Services />} path="/services" />
                    <Route element={<Offers />} path="/offers" />
                    <Route element={<Reservation />} path="/reservation" />

                    <Route path="*" element={<h1>Not found</h1>} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;