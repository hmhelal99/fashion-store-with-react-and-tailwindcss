import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import imgOne from "../../public/images/products/product1.png";
import imgTwo from "../../public/images/products/product2.png";
import Ratings from "./rating";
import {FaRegHeart, FaRegEye} from "react-icons/fa";
import {BsCartCheck} from "react-icons/bs";

const ProductItem = ({product}) => {
  return (
    <Fragment>
      <div className="basis-1/2 md:basis-1/5 pr-2 pl-2 mb-8 rounded-sm">
        <div>
          <Link href="/">
            <a className="group relative block">
              <div className="block">
                <Image src={product.thumbnail} />
              </div>
              <div className="absolute left-0 top-0 bottom-0 right-0 opacity-0">
              <Image
                src={imgTwo}
                className="block"
              />
              </div>
              {
                product.onSale ?
                <span className="
                absolute top-3 
                left-3 text-sm 
                bg-secondary 
                text-white-color 
                py-0.5 px-2 rounded-tl-md rounded-br-md">Sale</span>
                :
                null
              }
              
            </a>
          </Link>
        </div>
        <div>
          <p className="mt-2 text-sm">Jacket, Women</p>
          <h3 className="font-semibold my-1">{product.title}</h3>
          <div className="flex gap-2">
            <span>$144</span>
            <span>-</span>
            <span className="line-through">$98</span>
          </div>
          <div className="my-1">
            <Ratings/>
          </div>
          <div className="flex gap-1.5 items-center mt-3">
            <Link href="/">
              <a className="flex border border-border-color 
              items-center py-2 px-3 
              text-gray-text rounded-sm 
              text-sm md:text-md
              transition delay-75 
              hover:bg-secondary hover:text-white-color"> <BsCartCheck/> + Add To Cart</a>
            </Link>
            <span className="border border-border-color items-center py-2.5 md:py-3 px-3 cursor-pointer  text-gray-text  rounded-sm transition delay-75 hover:bg-secondary hover:text-white-color"><FaRegHeart/></span>
            <span className="border border-border-color items-center py-2.5 md:py-3 px-3 cursor-pointer  text-gray-text  rounded-sm transition delay-75 hover:bg-secondary hover:text-white-color"><FaRegEye/></span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItem;
