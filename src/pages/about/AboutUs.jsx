import {about} from "../../data.js"
import PageBanner from "../../components/pageBanner/PageBanner.jsx";
import Features from "../../components/features/Features.jsx";
import "./AboutUs.scss"
import AboutInfo from "../../components/aboutInfo/AboutInfo.jsx";
import RatingSystem from "../../components/ratingSystem/RatingSystem.jsx";
import LatestPosts from "../../components/latestPosts/LatestPosts.jsx";
import Brands from "../../components/brands/Brands.jsx";
const AboutUs = () => {
    return (
        <div className='about-us'>
            <PageBanner title={about.title} lastLabel={about.title} />
            <Features/>
             <AboutInfo/>
            <RatingSystem/>
            <LatestPosts/>
            <Brands/>
        </div>
    );
};

export default AboutUs;