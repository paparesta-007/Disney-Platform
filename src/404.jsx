import { useNavigate } from "react-router-dom";
import CatalogBackground from "./assets/img/CatalogBackground.png";
import DisneyLogoHome from "./assets/img/DisneyLogoHome.png";
function Page404() {
  const navigate = useNavigate();
//  const srcVideo="https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2024/01/26/1706274878-disney.mp4"
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${CatalogBackground})` }}
      >
        <div className="absolute h-full left-10  text-white">
          <img src={DisneyLogoHome} onClick={() => navigate("/it-it/home")} className="w-[18%] cursor-pointer mt-1 py-2 ml-2" alt="" />
          <div className="relative left-5 top-1/3 ">
            <h1 className="text-4xl mb-5 font-bold"><a href="https://en.wikipedia.org/wiki/HTTP_404" className="underline text-blue-500">404</a> - Pagina non trovata</h1>
            {/* <span>Torna alla home per continuare a guardare</span> */}
            <button
              className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-md"
              onClick={() => navigate("/it-it/home")}
            >
              Torna alla home
            </button>
          </div>
          <div>
            {/* <video src={srcVideo} autoPlay muted loop className="w-[50%] h-[50%]"></video> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
