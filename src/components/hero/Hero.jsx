import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectFade} from "swiper/modules";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Hero.scss";
import {home} from "../../data.js";
import heroImg from "../../assets/images/hero-gopro.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_inner container">
                <button className="hero_arrow hero_arrow--prev" type="button" aria-label="Previous slide">
                    <Icon icon="solar:alt-arrow-left-outline"/>
                </button>
                <Swiper className="hero_slider"
                        modules={[Navigation, EffectFade]}
                        effect="fade"
                        fadeEffect={{crossFade: true}}
                        navigation={{prevEl: ".hero_arrow--prev", nextEl: ".hero_arrow--next"}}
                        loop>
                    {home.heroSlides.map((slide) => (
                        <SwiperSlide className="hero_slide" key={slide.id}>
                            <div className="hero_content">
                                <div className="hero_text-box">
                                    <h1 className="hero_title">{slide.title}</h1>
                                    <p className="hero_text">{slide.text}</p>
                                </div>
                                <Link className="hero_btn" to={slide.to}>{slide.button}</Link>
                            </div>
                            <div className="hero_img-box">
                                <img className="hero_img" src={heroImg} alt={slide.title}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="hero_arrow hero_arrow--next" type="button" aria-label="Next slide">
                    <Icon icon="solar:alt-arrow-right-outline"/>
                </button>

            </div>
        </section>
    );
};

export default Hero;