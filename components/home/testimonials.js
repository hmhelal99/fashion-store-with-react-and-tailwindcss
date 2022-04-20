import { Fragment } from "react";
import SectionTitle from "../global/sectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialItem from "./item.testimonials";

const Testimonials = () => {
    return (
        <Fragment>
            <section className="py-12">
                <SectionTitle title="Our Client Say"/>
                <div className="container">
                    <Swiper
                        modules={[Pagination]}
                        pagination={true}
                        slidesPerView={1}
                        spaceBetween={25}
                        loop={true}
                        breakpoints={{
                            768:{
                                slidesPerView:3
                            }
                        }}
                        className="!pt-5 !pb-14"
                    >
                        <SwiperSlide>
                            <TestimonialItem itemId={1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialItem itemId={2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialItem itemId={3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialItem itemId={4}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </Fragment>
    )
}

export default Testimonials;
