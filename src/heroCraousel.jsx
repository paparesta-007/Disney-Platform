import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; // Import Flickity CSS
function HeroCarousel() {
    const carouselRef = useRef(null);

    useEffect(() => {
      // Initialize Flickity after the component mounts
      const flickity = new Flickity(carouselRef.current, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
      });
  
      return () => {
        // Cleanup Flickity instance when the component unmounts
        flickity.destroy();
      };
    }, []);
  
    return (
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-cell">Item 1</div>
        <div className="carousel-cell">Item 2</div>
        <div className="carousel-cell">Item 3</div>
        {/* Add more carousel items here */}
      </div>
    );
}
export default HeroCarousel;
