import Navbar from "../Navbar";
import DisneyOpening from "../assets/video/openingScene/DisneyOpening2.mp4";
import "../index.css";
import "../css/Navbar.css";
import Carousel from "../carousel";
function DisneyPage() {
  const apiUrl = "https://apidisneymovies.bsite.net/api/v1/movies/all?details=true";

  function HandleEnd(e) {
    e.target.pause();
  }
  function FetchData() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
  }

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Video di sfondo fisso */}
        <video
          src={DisneyOpening}
          autoPlay
          muted
          onEnded={HandleEnd}
          onClick={FetchData}
          className="fixed top-0 left-0 w-full h-full object-cover"
        />

        {/* Contenuto scrollabile che va sopra il video */}
        <div className="relative z-2  PaginaSfumata">
          <div className=" px-6 py-4">
            <div className="h-[50vh]">
              ciaoo
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#99989c]">In primo piano</h2>
              <Carousel 
                data={[{
                    title: "Miraculous",
                    imageSrc: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/bc78d686-d754-4aa7-8bbd-21a00b890263/compose?format=webp&label=standard_art_178&width=800",
                    description: "Miraculous - Le storie di Ladybug e Chat Noir"
                  },{
                    title:"La sirenetta",
                    imageSrc:"https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d237f39b-e81e-4134-9235-675c0cc0ba38/compose?format=webp&label=standard_art_178&width=800",
                    description:"La sirenetta"
                  },
                  {
                    title:"Il re leone",
                    imageSrc:"https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1c1de1b8-02fb-4f16-926b-582b6112d1ba/compose?format=webp&label=standard_art_disney-original_178&width=800",
                    description:"Il re leone"
                  }]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisneyPage;
