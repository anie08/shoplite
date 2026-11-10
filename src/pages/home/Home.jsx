import "./Home.scss";
import Hero from "../../components/hero/Hero.jsx";
import Features from "../../components/features/Features.jsx";
import Categories from "../../components/categories/Categories.jsx";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Features />
            <Categories />
        </div>
)
};

export default Home;