import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerOne from "../../public/images/products/banner5.png";
import bannerTwo from "../../public/images/products/banner6.png";

import BannerInfo from "./info.banner";

const BannerBottom = () => {
  return (
    <Fragment>
      <section className="">
        <div className="container hidden md:flex gap-5">
          <div className="">
            <BannerInfo
              item={{
                title: "Spring Collection <br /> Style To",
                subTitle: "17% Discount",
                banner: bannerOne,
                url: "/",
              }}
            />
          </div>
          <div className="">
            <BannerInfo
              item={{
                title: "Spring Collection <br /> Style To",
                subTitle: "17% Discount",
                banner: bannerTwo,
                url: "/",
              }}
            />
          </div>
          </div>
      </section>
    </Fragment>
  );
};

export default BannerBottom;
