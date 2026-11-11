import { home, products } from "../../data.js";
import './BestSellers.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, } from "swiper/modules";
import {Icon} from "@iconify/react";
import "swiper/css";
import Card from "../card/Card.jsx";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
const BestSellers = () => {
    const bestItems = products.filter((product) =>
        home.bestSelling.productIds.includes(product.id)
    );
    return (
        <section className="best-sellers">
            <div className="best-sellers_inner container">
                <div className="best-sellers_head">
                    <SectionTitle title={home.bestSelling.title} />
                </div>
                <div className="best-sellers_slider-box">
                <button className="best-sellers_arrow best-sellers_arrow--prev" type="button" aria-label="Previous products">
                    <Icon icon="solar:alt-arrow-left-outline" />
                </button>
                <Swiper
                    className="best-sellers_slider"
                    modules={[Navigation]}
                    navigation={{ prevEl: ".best-sellers_arrow--prev", nextEl: ".best-sellers_arrow--next" }}
                    slidesPerView={5}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        576: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                    }}
                >
                    {bestItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card image={item.image} name={item.name} price={item.price} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="best-sellers_arrow best-sellers_arrow--next" type="button" aria-label="Next products">
                    <Icon icon="solar:alt-arrow-right-outline" />
                </button>
                </div>

            </div>
        </section>
    );
};

export default BestSellers;
