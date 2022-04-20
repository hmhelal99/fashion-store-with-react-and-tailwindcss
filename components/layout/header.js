import { Fragment } from "react";
import HeaderBottom from "../header/HeaderBottom";
import MainHeader from "../header/MainHeader";
import TopBar from "../header/TopBar";

const Header = () => {
  return (
    <Fragment>
      <header>
        <TopBar/>
        <MainHeader/>
        <HeaderBottom/>
      </header>
    </Fragment>
  );
};

export default Header;
