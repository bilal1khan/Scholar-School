import React, { useState, useEffect, useRef } from 'react';

export const Slider = ({ images, autoplay = true, autoplayInterval = 5000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        if (autoplay) {
            intervalRef.current = setInterval(goToNextSlide, autoplayInterval);
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [currentImageIndex, autoplay, autoplayInterval]);

    const goToPreviousSlide = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const handleMouseEnter = () => {
        clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        if (autoplay) {
            intervalRef.current = setInterval(goToNextSlide, autoplayInterval);
        }
    };

    return (
        <div className="relative w-full mt-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="flex overflow-hidden relative">
                <div className="flex transition-transform duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={goToPreviousSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none">
                &#10094;
            </button>
            <button onClick={goToNextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md focus:outline-none">
                &#10095;
            </button>
        </div>
    );
};
