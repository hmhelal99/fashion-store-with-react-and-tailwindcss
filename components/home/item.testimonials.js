import Image from "next/image";
import { Fragment } from "react";
import img from "../../public/images/products/testimonial-thumb1.png";
import imgTwo from "../../public/images/products/testimonial-thumb2.png";
import imgThree from "../../public/images/products/testimonial-thumb3.png";
import Ratings from "../global/rating";

const TestimonialItem = ({itemId}) => {
  return (
    <Fragment>
      <div className="group flex flex-col items-center py-6 px-7 shadow-lg">
        <div className="flex items-center justify-center overflow-hidden 
        border-2 border-[#e7e7e7] group-hover:border-secondary transition-all delay-75 p-1
        w-[88px] h-[88px] 
        rounded-full">
            {
                itemId == 1 ?
                <Image src={img} width={85} height={85}/> :
                itemId == 2 ? 
                <Image src={imgTwo} width={85} height={85}/> :
                itemId == 3 ? 
                <Image src={imgThree} width={85} height={85}/>
                :
                <Image src={img} width={85} height={85}/>
            }
        </div>
        <div className="text-center pb-2">
          <h3 className="text-xl font-medium pt-2 pb-1">Richard Smith</h3>
          <span className="text-gray-text">Fashion Designer</span>
          <p className="pt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim{" "}
          </p>
        </div>
        <Ratings/>
      </div>
    </Fragment>
  );
};

export default TestimonialItem;
