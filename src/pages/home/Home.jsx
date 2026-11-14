import "./Home.scss";
import Hero from "../../components/hero/Hero.jsx";
import Features from "../../components/features/Features.jsx";
import Categories from "../../components/categories/Categories.jsx";
import BestSellers from "../../components/bestSellers/BestSellers.jsx";
import LimitedSale from "../../components/limitedSale/LimitedSale.jsx";
import ItemLists from "../../components/itemLists/ItemLists.jsx";
import RatingSystem from "../../components/ratingSystem/RatingSystem.jsx";
import LatestPosts from "../../components/latestPosts/LatestPosts.jsx";
const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Features />
            <Categories />
            <BestSellers />
            <LimitedSale/>
            <ItemLists/>
            <RatingSystem/>
            <LatestPosts/>

        </div>
)
};

export default Home;