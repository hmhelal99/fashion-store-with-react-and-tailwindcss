import { Fragment } from "react";
import bgImage from "../../public/images/banner-bg2.png";
import BtnWithIcon from "../global/btnWithIcon";
import CountDown from "../global/countDown";

const BannerThree = () => {
  return (
    <Fragment>
      <section>
        <div
          className="container bg-cover bg-center relative -z-10"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#00000099] w-full h-full -z-10"></div>
          <div className="py-14 pl-10">
 
            <h2 className="font-semibold text-white-color text-4xl py-4">Need Winter Boots? </h2>
            <p className="text-white-color">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
              sed do
              eiusmod tempor incididunt ut labore
            </p>
              
              <div className="mt-5">
                <BtnWithIcon/>
              </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BannerThree;
