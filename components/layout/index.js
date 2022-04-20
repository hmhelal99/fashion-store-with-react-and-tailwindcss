import { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
    return (
        <Fragment>
            <Header/>
                {children}
            <Footer/>
        </Fragment>
    )
}

export default Layout;
