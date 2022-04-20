import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerOne from "../../public/images/banner1.png";
import bannerTwo from "../../public/images/banner2.png";
import bannerThree from "../../public/images/banner3.png";
import bannerFour from "../../public/images/banner4.png";
import BannerInfo from "./info.banner";

const HomeBanner = () => {
  return (
    <Fragment>
      <section className="py-16">
        <div className="container flex home-banner">
          <div className="w-5/12 pr-3">
            <BannerInfo
              item={{
                title: "Spring Collection <br /> Style To",
                subTitle: "17% Discount",
                banner: bannerOne,
                url: "/",
              }}
            />
          </div>
          <div className="w-7/12 pl-3">
            <div className="flex">
              <div className="pr-3">
                <BannerInfo
                  item={{
                    title: "Up to 70% Off & <br /> Free Shipping",
                    subTitle: "Shop Women",
                    banner: bannerTwo,
                    isRed:true,
                    url: "/",
                  }}
                />
              </div>
              <div className="pl-3">
                <BannerInfo
                  item={{
                    title: "Free Shipping Over <br /> Order $120",
                    subTitle: "Shop Women",
                    banner: bannerThree,
                    url: "/",
                  }}
                />
              </div>
            </div>
            <div className="pt-5">
              <div>
                <BannerInfo
                  item={{
                    title: "Leather Saddle <br /> Bag Style",
                    subTitle: "25% Discount",
                    banner: bannerFour,
                    url: "/",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeBanner;
