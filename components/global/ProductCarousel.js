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
            spaceBetween={5}
            slidesPerView={5}
            navigation={true}
            modules={[Navigation,Autoplay]}
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
