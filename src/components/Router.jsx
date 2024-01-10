'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home/Home';
import Room from './screens/Rooms/Room'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Room />} path="/room/:id" />

                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;