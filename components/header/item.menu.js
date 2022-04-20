import { Fragment } from "react";
import Link from "next/link";
import {FaAngleDown} from "react-icons/fa";

const MenuItem = ({ isChild, item }) => {
  if (!isChild) {
    return (
      <Fragment>
        <li className="group">
          <Link href="/">
            <a className="text-lg flex gap-2 items-center font-normal  group-hover:text-secondary transition duration-700">
                {item.title}
            </a>
          </Link>
        </li>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <li className="relative group">
        <Link href="/">
          <a className="text-lg flex gap-2 items-center font-normal">
            {item.title} <FaAngleDown />
          </a>
        </Link>
        <ul className="absolute top-full bg-white-color h-fit left-0 origin-top scale-y-0 group-hover:scale-y-100 transition duration-700 py-2 px-2 w-32 z-50">
          <li>
            <Link href="/">
              <a className="text-lg flex gap-2 items-center font-normal">
                Kids Zone
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-lg flex gap-2 items-center font-normal">
                Kids Zone
              </a>
            </Link>
          </li>
        </ul>
      </li>
    </Fragment>
  );
};

export default MenuItem;
