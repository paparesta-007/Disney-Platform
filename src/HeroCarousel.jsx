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
        <div className="absolute left-20 w-[20%] ">
          <img className="mb-2" src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/92871b9a-c5f8-4aca-9c89-e371239ae5fc/trim?format=webp&max=800%7C450"alt="Overlay"/>
          <span className=" text-white font-bold">Dal creatore di Peaky Blinders <br />In arrivo il 21 febbraio su Disney+</span>
          <div className="flex">
            <div className="bg-[#30313c] mr-2 w-auto px-1 rounded text-white">16+</div>
            <span className="text-[#a8a9ad]">2025 ⋅ Drammatico, Storia</span>
          </div>
        </div>
        <img
          src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1a56395c-533e-4191-94f4-23f07c36c640/compose?format=webp&label=hero_carousel_none_300&width=2880"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="carousel-cell relative rounded-lg overflow-hidden">
        <div className="absolute left-20 w-[20%]">
          <img
            src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/f919ff0c-1df5-4d63-b5c6-319d8822d4db/trim?format=webp&max=800%7C450"
            alt="Overlay"
          />
          <span className=" text-white font-bold">Nomination ai BAFTA</span>
          <div className="flex">
            <div className="bg-[#30313c] mr-2 w-auto px-1 rounded text-white">6+</div>
            <span className="text-[#a8a9ad]">2024 ⋅ Adolescenza, Animatione</span>
          </div>
        </div>
        <img
          src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e3b5f968-f4db-4bb5-91e3-1017d761e042/compose?format=webp&label=hero_carousel_none_300&width=2880"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="carousel-cell relative rounded-lg overflow-hidden">
        <div className="absolute left-20 w-[20%] ">
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
        <div className="absolute left-20 w-[20%] w-">
            <img
              src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/c941a9c6-a2d0-43a2-a823-5f4841b34651/trim?format=webp&max=800%7C450"
              alt="Overlay"
            />
          </div>
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
