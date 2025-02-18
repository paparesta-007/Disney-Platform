import Navbar from "./Navbar";
import HeroCarousel from "./HeroCarousel";
import HomeFranchiseCards from "./HomeCardFranchise";

function Home(){
    return(
        <>
        <Navbar />
        <div className=""></div>
        <HeroCarousel />
        <HomeFranchiseCards />
        </>
    )
}
export default Home;