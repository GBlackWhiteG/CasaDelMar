'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Home from './screens/Home/Home';
import Room from './screens/Rooms/Room'

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Room />} path="/rooms" />
                    <Route element={<Room />} path="/rooms/:id" />

                    <Route path="*" element={<h1>Not found</h1>} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;