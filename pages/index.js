import { Fragment } from "react";
import HomeBanner from "../components/home/banner";
import Hero from "../components/home/hero";
import PageContent from "../components/layout/PageContent";
import Products from "../components/home/Products";
import Productcarousel from "../components/global/ProductCarousel";
import BannerBottom from "../components/home/bannerBottom";
import Testimonials from "../components/home/testimonials";
import Blogs from "../components/home/blog";
import BannerThree from "../components/home/benner3";
import Deal from "../components/home/deal";
const Home = () => {
  return (
    <Fragment>
      <PageContent>
        <Hero/>
        <HomeBanner/>
        <Products/>
        <Deal/>
        <Productcarousel/>
        <BannerBottom/>
        <Testimonials/>
        <BannerThree/>
        <Blogs/>
      </PageContent>
    </Fragment>
  );
};

export default Home;
