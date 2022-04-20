import { Fragment } from "react";
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const BannerInfo = ({item}) => {
  return (
    <Fragment>
        <div className="relative group">
                <Image src={item.banner} />
      <div className="absolute top-6 left-6">
        <p className={`${item.isRed ? 'text-secondary' : ''}`}>{item.subTitle}</p>
        <h3 className="text-xl font-semibold py-2" dangerouslySetInnerHTML={{__html:item.title}}></h3>
        <Link href="/">
          <a className={`flex items-center gap-2 text-gray-text group-hover:text-secondary transition-all duration-600`}>
            View Discounts
            <span className="text-secondary">
              <FaArrowRight />
            </span>
          </a>
        </Link>
      </div>
      </div>
    </Fragment>
  );
};

export default BannerInfo;
