import { Fragment} from "react";
import ProductItem from "./item.product";
import products from "../../data/products";
import SectionTitle from "./sectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const ProductCarousel = () => {

  return (
    
    <Fragment>
      <section className="py-12">
        <div className="container">
            <SectionTitle title="Our Best Seller"/>
            <Swiper
            autoplay={{delay:3000, disableOnInteraction:false}}
            spaceBetween={1}
            slidesPerView={2}
            navigation={true}
            modules={[Navigation,Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },

            }}
            >
                {products.map((item, idx) => {
                        return (
                        idx <= 7 ?
                            <SwiperSlide>
                                <ProductItem key={Math.random()} product={item} />
                            </SwiperSlide>
                        : null
                        )
                    })}
            </Swiper>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductCarousel;
