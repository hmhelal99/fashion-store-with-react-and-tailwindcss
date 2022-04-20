import {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";
import lampImg from "../../public/images/lamp.png";
import MenuItem from "./item.menu";

const HeaderBottom = () => {
    return (
        <Fragment>
            <div className="py-3 border border-border-color main-menu">
                <div className="container flex justify-between items-center">
                    <nav>
                      <ul className="flex gap-8">
                          <MenuItem item={{title:"Home",url:"/"}}/>
                          <MenuItem isChild={true} item={{title:"Shop Now",url:"/"}}/>
                          <MenuItem isChild={true} item={{title:"Man's Fashion",url:"/"}}/>
                          <MenuItem isChild={true} item={{title:"Women's Fashion",url:"/"}}/>
                          <MenuItem item={{title:"For Him",url:"/"}}/>
                          <MenuItem isChild={true} item={{title:"Kids Zone",url:"/"}}/>

                          
                      </ul>
                    </nav>
                    <div>
                        <p className="flex items-center gap-2"><Image src={lampImg}/><span>Special up to 60% Off all item</span></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderBottom;
