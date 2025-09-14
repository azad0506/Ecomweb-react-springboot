import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarasolData } from './HomeCarasolData';






const HomeCaresol = () => {
    const items = HomeCarasolData.map((item, index) => (

        //     <img 
        //     key={index}
        //     src={item.image} 
        //     alt="carousel item" 
        //     role="presentation"
        //       className="w-full h-full object-cover "
        // />

        //     <div key={index} className="p-5">
        // <div className="w-full h-[600px] border border-green-400 flex justify-center items-center bg-black">
        //   <img 
        //     src={item.image} 
        //     alt="carousel item" 
        //     role="presentation"
        //     className="max-w-full max-h-full object-contain"
        //   />
        // </div>
        // </div>


        <div className="mySlides  relative h-full key={index}">
            <img
                src={item.image}
                 role="presentation"
                className="w-full h-full object-cover"
                alt="cild"
            />
            <div className="absolute bottom-2 left-0 text-center text-white text-sm w-full">
                Caption Text
            </div>
        </div>
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