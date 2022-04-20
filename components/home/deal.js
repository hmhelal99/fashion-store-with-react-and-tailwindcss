import { Fragment } from "react";
import bgImage from "../../public/images/products/banner-bg1.png";
import BtnWithIcon from "../global/btnWithIcon";
import CountDown from "../global/countDown";

const Deal = () => {
  return (
    <Fragment>
      <section>
        <div
          className="container bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
          <div className="py-14 pl-10">
            <p className="text-secondary font-medium">
              Hurry up and Get 25% Discount 
            </p>
            <h2 className="font-semibold text-4xl py-4">Deals Of The Day</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
              sed do
              eiusmod tempor incididunt ut labore
            </p>
              <div className="my-6">
                <CountDown/>
              </div>
              <div>
                <BtnWithIcon/>
              </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Deal;
