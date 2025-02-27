import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarasolData } from './HomeCarasolData';






const HomeCaresol = () => { 
    const items = HomeCarasolData.map((item, index) => (
        <img 
            key={index} 
            src={item.image} 
            alt="carousel item" 
            role="presentation"
              className="w-full h-auto object-cover"
        />
    ));
    
    return (
    <div>
        <AliceCarousel
            // mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableButtonsControls //for button
        />
    </div>
)
}
export default HomeCaresol;