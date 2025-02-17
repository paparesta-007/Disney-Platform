import { useRef } from "react";
import "./css/HomeCardFranchise.css";
import HyperSpaceAnimation from "./assets/video/HyperSpaceAnimation.mp4";
import PixarAnimation from "./assets/video/PixarAnimation.mp4";
import DisneyAnimation from "./assets/video/DisneyAnimation.mp4";
import MarvelAnimation from "./assets/video/MarvelAnimation.mp4";
import StarAnimation from "./assets/video/StarAnimation.mp4";
import NationalGeographicAnimation from "./assets/video/NationalGeographicAnimation.mp4";
import { useNavigate } from "react-router-dom";

function HomeFranchiseCards() {
  const videoRefs = useRef([]);
  const navigate = useNavigate();
  const data = [
    {nome:"disney", imgSrc: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/compose?format=webp&width=800", videoSrc: DisneyAnimation },
    {nome:"pixar", imgSrc: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/compose?format=webp&width=800", videoSrc: PixarAnimation },
    {nome:"marvel", imgSrc: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/8D83D724070255A0A0078E3D7945301A1F5ADD0DCCA1C7F908542AEA0C742823/compose?format=webp&width=800", videoSrc: MarvelAnimation },
    {nome:"starwars", imgSrc: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/compose?format=webp&width=800", videoSrc: HyperSpaceAnimation },
    {nome:"nationalgeographic", imgSrc: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/compose?format=webp&width=800", videoSrc: NationalGeographicAnimation },
    {nome:"star", imgSrc: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/AE893BCDD6264C4A876C03A0DE5004D9F394BE1E8388F085431318CDCEC9A598/compose?format=webp&width=800", videoSrc: StarAnimation },
  ];

  function handleMouseEnter(index) {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch((err) => {
        console.error("Errore nell'avvio del video:", err);
      });
    }
  };

  function handleClick(nome){
    navigate(`/it-it/browse/${nome}`);
  }
  function handleMouseLeave(index) {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };
  
  return (
    <div className="flex space-x-4 p-2 mx-20 mt-8">
      {data.map(({nome, imgSrc, videoSrc }, index) => (
        <div key={index} onClick={() => handleClick(nome)} className="card rounded-[12px] relative overflow-hidden"onMouseEnter={() => handleMouseEnter(index)}  onMouseLeave={() => handleMouseLeave(index)}>
          <video  ref={(el) => (videoRefs.current[index] = el)}  src={videoSrc} muted loop playsInline  ></video>
          <img src={imgSrc} alt="" />
        </div>
      ))}
    </div>
  );
}

export default HomeFranchiseCards;
