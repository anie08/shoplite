import "./Home.scss";
import Hero from "../../components/hero/Hero.jsx";
import Features from "../../components/features/Features.jsx";
import Categories from "../../components/categories/Categories.jsx";
import BestSellers from "../../components/bestSellers/BestSellers.jsx";
import LimitedSale from "../../components/limitedSale/LimitedSale.jsx";
const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Features />
            <Categories />
            <BestSellers />
            <LimitedSale/>
        </div>
)
};

export default Home;