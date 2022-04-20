import { Fragment } from "react";
import {FaRegStar, FaRegStarHalf, FaStar} from "react-icons/fa";
const Ratings = () => {
    return (
        <Fragment>
            <ul className="flex gap-1">
              <li className="text-yellow"><FaStar/></li>
              <li className="text-yellow"><FaStar/></li>
              <li className="text-yellow"><FaStar/></li>
              <li className="text-yellow"><FaStar/></li>
              <li className="text-yellow"><FaStar/></li>
            </ul>
        </Fragment>
    )
}

export default Ratings;
