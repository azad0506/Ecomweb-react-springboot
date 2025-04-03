import React, { useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarelo = ({data, sectionName}) => {
    let [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null); // Create a ref
    // console.log(carouselRef)
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };
    const items = data.slice(0, 10).map((item, index) => (
        <div key={index} className="mx-2">  {/* Adds margin between cards */}
            <HomeSectionCard product={item} />
        </div>
    ));
    //move to left side
    const slidePreview = () => carouselRef.current?.slidePrev(); // Use API method
    // Move to next slide
    const slideNext = () => {
        console.log("object")
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item)
    return (
        <div className="relative px-4 lg:px-8 border border-green-500">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            {/* Left Button */}
            {activeIndex > 0 &&
                <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2  shadow-md hover:bg-gray-600 transition"
                    onClick={slidePreview}>
                    <KeyboardArrowLeftIcon fontSize="large" color='black' />
                </button>}
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    ref={carouselRef} // Assign the ref to AliceCarousel
                    disableButtonsControls //for button
                    disableDotsControls    //for dots
                    onSlideChanged={syncActiveIndex} // Keep track of active index 
                    activeIndex={activeIndex}
                />
            </div>
            {/* Right Button */}

            {activeIndex !== items.length - 5 &&
                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition"
                    onClick={slideNext} aria-label="Next Slide">
                    <KeyboardArrowRightIcon fontSize="large" />
                </button>}
        </div>
    )
}

export default HomeSectionCarelo
