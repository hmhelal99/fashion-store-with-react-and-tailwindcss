import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa";
const BtnWithIcon = () => {
  return (
    <>
      <button className="flex items-center gap-2 bg-secondary text-white-color py-2 px-5 text-lg rounded">
        Show Collection <FaArrowRight />
      </button>
    </>
  );
};

export default BtnWithIcon;
