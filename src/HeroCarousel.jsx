import { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

function HeroCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const flickityInstance = new Flickity(carouselRef.current, {
      cellAlign: "center",   // Centro la cella attiva
      wrapAround: true,      // Abilito il looping infinito
      autoPlay: 3000,        // Auto-play ogni 3 secondi
      initialIndex: 1,       // Inizio con la seconda cella centrata
      cellSpacing: 20,       // Spaziatura uniforme di 20px tra le celle
    });

    return () => {
      flickityInstance.destroy();
    };
  }, []);

  return (
    <div ref={carouselRef} className="carousel" style={{ margin: "10px 0" }}>
      <div className="carousel-cell relative rounded-lg overflow-hidden">
        <div className="absolute left-20 w-64">
          <img
            src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/23f92c61-98e2-45f5-a895-e656a58d058d/trim?format=webp&max=800%7C450"
            alt="Overlay"
          />
        </div>
        <img
          src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e26ebe6d-5466-4ae1-8bb9-f97e65ca08e6/compose?format=webp&label=hero_carousel_none_300&width=2880"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="carousel-cell relative rounded-lg overflow-hidden">
        <img
          src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2c39586f-5513-4bfa-b8c4-4c785c28143a/compose?format=webp&label=hero_carousel_none_300&width=2880"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
     
    </div>
  );
}

export default HeroCarousel;
