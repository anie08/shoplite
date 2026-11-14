import {customerReviews} from '../../data.js'
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import Stars from "../stars/Stars.jsx"
import {Icon} from "@iconify/react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "./RatingSystem.scss"
const RatingSystem = () => {
    return (
        <section className="rating-system container">
                <div className="rating-system_block" key={customerReviews.title}>
                    <SectionTitle title={customerReviews.title} />
                    <div className="rating-system_slider-box">
                    <button className="rating-system_arrow rating-system_arrow--prev" type="button" aria-label="Previous products">
                        <Icon icon="solar:alt-arrow-left-outline" />
                    </button>
                    <Swiper
                        className="rating-system_slider"
                        modules={[Navigation]}
                        navigation={{ prevEl: ".rating-system_arrow--prev", nextEl: ".rating-system_arrow--next" }}
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 3 },

                        }}
                    >
                        {customerReviews.reviews.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="rating-system_block_info_item" key={item.id}>
                                    <p className="rating-system_block_info_item_review">{item.text}</p>
                                    <div className="rating-system_stars"><Stars rating={item.rating} /></div>

                                    <p className="rating-system_block_info_item_name">{item.name}</p>
                                </div>                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="rating-system_arrow rating-system_arrow--next" type="button" aria-label="Next products">
                        <Icon icon="solar:alt-arrow-right-outline" />
                    </button>
                    </div>
                </div>





        </section>
    );
};

export default RatingSystem;