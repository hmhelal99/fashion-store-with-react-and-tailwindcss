import { Fragment } from "react";
import Link from "next/link";
import {FaShippingFast} from "react-icons/fa";
import {BsEnvelope} from "react-icons/bs";

const TopBar = () => {
  return (
    <Fragment>
      <div className="bg-secondary py-3">
        <div className="container flex justify-center md:justify-between items-center">
          <div>
            <ul className="flex gap-5">
              <li className="top-bar-text with-bar hidden md:block">Welcome to Netmark online Store</li>
              <li className="top-bar-text with-bar flex gap-1 items-center"><FaShippingFast/>Track Your Order</li>
              <li className="top-bar-text flex gap-1 items-center">
                <BsEnvelope/>  
                <Link href="mailto:demo@gmail.com">
                  <a>demo@gmail.com</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="hidden md:flex gap-5">
                <li className="top-bar-text">
                    <Link href="/">
                    <a>About Us</a>
                    </Link>
                </li>
                <li className="top-bar-text">
                    <Link href="/">
                    <a>FAQs</a>
                    </Link>
                </li>
                <li className="top-bar-text">
                    <Link href="/">
                    <a>Contact Us</a>
                    </Link>
                </li>
                </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopBar;
