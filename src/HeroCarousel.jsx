// className="" src/FlickityCarousel.jsx
import  { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

function HeroCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    console.log("Carousel ref:", carouselRef.current);
    if (!carouselRef.current) return;

    const flickityInstance = new Flickity(carouselRef.current, {
      cellAlign: "center", // Center the active slide
      wrapAround: true, // Enable infinite looping
      autoPlay: 3000, // Auto-play every 3 seconds
      initialIndex: 1, // Start with the second slide centered
    });

    return () => {
      flickityInstance.destroy();
    };
  }, []);

  // const slideStyle = {
  //   width: "90%",
  //   height: "60vh",
  //   marginRight: "20px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: "10px",
  // };

  return (
    <div ref={carouselRef} className="carousel" style={{ margin: "10px 0" }}>
      <div className="carousel-cell relative rounded-lg overflow-hidden mr-5">
          <div className="absolute left-20 w-80">
            <img  src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/23f92c61-98e2-45f5-a895-e656a58d058d/trim?format=webp&max=800%7C450" alt="" />
            </div>
          <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e26ebe6d-5466-4ae1-8bb9-f97e65ca08e6/compose?format=webp&label=hero_carousel_none_300&width=2880" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="carousel-cell relative rounded-lg overflow-hidden mr-5">
        
          <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2c39586f-5513-4bfa-b8c4-4c785c28143a/compose?format=webp&label=hero_carousel_none_300&width=2880" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="carousel-cell relative rounded-lg overflow-hidden">
          <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/094aed91-e8c6-4a5e-a646-fdfadbad247f/compose?format=webp&label=hero_carousel_none_300&width=2880" alt="" className="object-cover w-full h-full" />
      </div>
  </div>

  );
}

export default HeroCarousel;
