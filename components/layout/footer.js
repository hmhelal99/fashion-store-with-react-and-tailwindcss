import { Fragment } from "react";
import Image from "next/image";
import paymentImg from "../../public/images/payment-visa-card.png";
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";


const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-[#1d1c1c] text-white-color">
        <div className="container flex flex-wrap py-14">
          <div className="w-2/4 md:w-1/4">
            <h2
              className="relative text-xl mb-6
              after:w-[60px] after:h-0.5 after:bg-[gray] after:absolute
              after:left-0 after:top-full
              "
            >
              About Us
            </h2>
            <div>
              <p className="text-white-color">
                Lorem ipsum dolor sit amet, consectetur adipisici ti elit
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisici ti elit
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisici ti elit
                <br />
                exercitation ullamco
              </p>
            </div>
            <div>
            <h2
              className="relative text-xl mt-6 mb-2
              ">
              Follow Us
            </h2>
            <ul className="flex gap-2">
              <li><FaFacebookF/></li>
              <li><FaTwitter/></li>
              <li><FaInstagram/></li>
              <li><FaYoutube/></li>
            </ul>
            </div>
          </div>

          <div className="w-2/4 md:w-1/4 flex">
            <div className="mr-8">
              <h2
                className="relative text-xl mb-6
                after:w-[60px] after:h-0.5 after:bg-[gray] after:absolute
                after:left-0 after:top-full
                "
              >
                My Account
              </h2>
              <div>
                <ul>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    My Account
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Shopping Cart
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Login
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Register
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Checkout
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Whishlist
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2
                className="relative text-xl mb-6
                after:w-[60px] after:h-0.5 after:bg-[gray] after:absolute
                after:left-0 after:top-full
                "
              >
                Categories
              </h2>
              <div>
                <ul>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    My Account
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Shopping Cart
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Login
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Register
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Checkout
                  </li>
                  <li className="hover:text-secondary cursor-pointer mb-1">
                    Whishlist
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-2/4 md:w-1/4">
            <h2
              className="relative text-xl mb-6
              after:w-[60px] after:h-0.5 after:bg-[gray] after:absolute
              after:left-0 after:top-full
              "
            >
              Instagram
            </h2>
            <div>
              <p className="text-white-color">
                Lorem ipsum dolor sit amet, consectetur adipisici ti elit
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisici ti elit
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisici ti elit
                <br />
                exercitation ullamco
              </p>
            </div>
          </div>

          <div className="w-2/4 md:w-1/4">
            <h2
              className="relative text-xl mb-6
              after:w-[60px] after:h-0.5 after:bg-[gray] after:absolute
              after:left-0 after:top-full
              "
            >
              Newsletter
            </h2>
            <div>
              <p className="text-white-color">
                Fill their seed open meat. Sea you great Saw image stl
              </p>
              <div className="mt-4">
                <input type="text" placeholder="Email address"
                className="w-full h-10 px-3 outline-none"/>
                <button className="w-full uppercase py-3 mt-3
                font-semibold text-white-color bg-secondary 
                transition delay-75 hover:bg-[#fff] hover:text-secondary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col md:flex-row gap-3 items-center justify-center md:justify-between border-t-2 border-[#ddd] pt-4">
            <div>
              <p className="text-white-color">Copyright © 2022 Suruchi . All Rights Reserved.Design By Suruchi</p>
            </div>
            <div>
              <Image src={paymentImg}/>
            </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
