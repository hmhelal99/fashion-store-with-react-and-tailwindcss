import Image from "next/image";
import { Fragment } from "react";
import img1 from "../../public/images/blog1.png";
import img2 from "../../public/images/blog2.png";
import img3 from "../../public/images/blog3.png";
import img4 from "../../public/images/blog1.png";
import SectionTitle from "../global/sectionTitle";

const Blogs = () => {
  return (
    <Fragment>
      <section className="py-12">
        <SectionTitle title="From The Blog" />
        <div className="container flex flex-wrap">
          <div className="w-2/4 md:w-1/4 group pr-2 pl-2 mb-4">
            <div>
              <Image src={img1} />
            </div>
            <div>
              <p className="pt-2">February 03, 2022</p>
              <h3 className="font-semibold text-lg py-2">
                Fashion Trends In 2021 Styles,Colors, Accessories
              </h3>
              <button className="py-2.5 px-8 border border-border-color text-gray-text rounded-sm transition-all delay-200 hover:bg-secondary hover:text-white-color">
                Read more
              </button>
            </div>
          </div>
          <div className="w-2/4 md:w-1/4 group pr-2 pl-2 mb-4">
            <div>
              <Image src={img2} />
            </div>
            <div>
              <p className="pt-2">February 03, 2022</p>
              <h3 className="font-semibold text-lg py-2">
                Fashion Trends In 2021 Styles,Colors, Accessories
              </h3>
              <button className="py-2.5 px-8 border border-border-color text-gray-text rounded-sm transition-all delay-200 hover:bg-secondary hover:text-white-color">
                Read more
              </button>
            </div>
          </div>
          <div className="w-2/4 md:w-1/4 group pr-2 pl-2 mb-4">
            <div>
              <Image src={img3} />
            </div>
            <div>
              <p className="pt-2">February 03, 2022</p>
              <h3 className="font-semibold text-lg py-2">
                Fashion Trends In 2021 Styles,Colors, Accessories
              </h3>
              <button className="py-2.5 px-8 border border-border-color text-gray-text rounded-sm transition-all delay-200 hover:bg-secondary hover:text-white-color">
                Read more
              </button>
            </div>
          </div>
          <div className="w-2/4 md:w-1/4 group pr-2 pl-2 mb-4">
            <div>
              <Image src={img4} />
            </div>
            <div>
              <p className="pt-2">February 03, 2022</p>
              <h3 className="font-semibold text-lg py-2">
                Fashion Trends In 2021 Styles,Colors, Accessories
              </h3>
              <button className="py-2.5 px-8 border border-border-color text-gray-text rounded-sm transition-all delay-200 hover:bg-secondary hover:text-white-color">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blogs;
