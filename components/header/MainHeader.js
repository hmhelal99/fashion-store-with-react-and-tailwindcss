import { Fragment } from "react";
import Image from "next/image";
import logo from "../../public/images/nav-log.png";
import {FaSearch,FaRegUser,FaRegHeart} from "react-icons/fa";
import {BsCartCheck} from "react-icons/bs";
import Link from "next/link";

const MainHeader = () => {
  return (
    <Fragment>
      <div className="py-4">
        <div className="container flex justify-between">
          <div className="flex items-center">
            <Image src={logo} alt="Fashion Store"/>
          </div>
          <div className="">
                <div className="relative border border-[#e7e7e7] h-12 overflow-hidden">
                    <select className="text-sm h-full max-h-full px-6 text-center text-gray-text outline-none border-r-[1px] border-r-[#e7e7e7]">
                        <option>All Categories</option>
                        <option>All Categories</option>
                        <option>All Categories</option>
                        <option>All Categories</option>
                        <option>All Categories</option>
                    </select>
                    <input className="w-96 h-full border-none outline-none px-4" type="text" placeholder="Keyword here..."/>
                    <span className="absolute top-0 right-0 bg-secondary w-14 h-full text-sm flex justify-center items-center">
                    <FaSearch className="text-sm text-white-color"/>
                    </span>
                </div>
          </div>
          <div className="">
            <ul className="flex justify-between gap-5">
                <li className="group">
                    <Link href="/">
                        <a className="flex flex-col items-center text-gray-text gap-2 group-hover:text-secondary transition duration-700">
                            <FaRegUser className="text-xl"/>
                            <span>My Account</span>
                        </a>
                    </Link>
                </li>
                <li className="group">
                    <Link href="/">
                        <a className="flex flex-col items-center text-gray-text gap-2 group-hover:text-secondary transition duration-700">
                            <FaRegHeart className="text-xl"/>
                            <span>Wish List</span>
                        </a>
                    </Link>
                </li>
                <li className="group">
                    <Link href="/">
                        <a className="flex flex-col items-center text-gray-text gap-2 group-hover:text-secondary transition duration-700">
                            <BsCartCheck className="text-xl"/>
                            <span>My Cart</span>
                        </a>
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainHeader;
