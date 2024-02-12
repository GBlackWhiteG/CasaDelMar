import React from 'react';
import Restaurants from './Restaurants/Restaurants'
import Events from './Events/Events'
import Experiences from './Experiences/Experiences'

const Services = React.memo(() => {
    return (
        <>
            <Restaurants />
            <Events />
            <Experiences />
        </>
    )
});

export default Services;