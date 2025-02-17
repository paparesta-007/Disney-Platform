import Navbar from "../Navbar";
import DisneyOpening from "../assets/video/openingScene/DisneyOpening2.mp4";

function DisneyPage() {
  const apiUrl = "https://apidisneymovies.bsite.net/api/v1/movies/all?details=true";

  function HandleEnd(e) {
    e.target.pause();
  }
  const backgroundCardContainer="background-color: rgba(26, 29, 41, 0.9);"
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
        <div className="relative z-10">
          <div className="min-h-screen px-6 py-4">
            <div className="h-[50vh]">
              ciaoo
            </div>
            <div className=" text-white p-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat libero. Veniam, neque culpa eum obcaecati eligendi recusandae voluptatibus ratione? Fugiat ratione iste sapiente officia maxime debitis illum, culpa id.</p>
              {/* Altri paragrafi */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisneyPage;
