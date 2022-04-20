import { Fragment } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import textShapeImg from "../../public/images/text-shape-icon.png";
import BtnWithIcon from "../global/btnWithIcon";

const Hero = () => {
  return (
    <Fragment>
      <section className="hero-area">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={true}
        >
          <SwiperSlide>
            <div className="bg-[url('/images/slider1.png')] bg-cover bg-no-repeat bg-center">
              <div className="container">
                <div className="py-20 hero-content">
                  <p className="flex items-center justify-center md:justify-start gap-2 
                  text-gray-text ">
                    <Image src={textShapeImg} /> New Collection
                  </p>
                  <h2 className="text-3xl md:text-5xl font-semibold py-6  text-center md:text-left">
                    The Great Fashion <br /> Collection 2022
                  </h2>
                  <p className="small-text pb-7 text-center md:text-left">
                    Up To 40% Off Final Sale Items. <br />
                    Caught in the Moment!
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <BtnWithIcon />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/images/slider2.png')] bg-cover bg-no-repeat bg-center">
              <div className="container flex justify-center md:justify-end">
                <div className="py-20 text-center hero-content">
                  <p className="flex items-center gap-2 text-gray-text w-fit mx-auto">
                    <Image src={textShapeImg} /> New Collection
                  </p>
                  <h2 className="text-3xl md:text-5xl font-semibold py-6">
                    The Great Fashion <br /> Collection 2022
                  </h2>
                  <p className="small-text pb-7">
                    Up To 40% Off Final Sale Items. <br />
                    Caught in the Moment!
                  </p>
                  <div className="flex justify-center">
                    <BtnWithIcon />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </Fragment>
  );
};

export default Hero;
