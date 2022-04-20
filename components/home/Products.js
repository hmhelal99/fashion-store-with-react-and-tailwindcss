import { Fragment } from "react";
import ProductRows from "../global/ProductRows";
import SectionTitle from "../global/sectionTitle";
import {Tabs, Tab, TabList, TabPanel} from "react-tabs";
const Products = () => {
    return (
        <Fragment>
            <section className="pt-6 pb-8">
                <div className="container">
                    <SectionTitle title="New Products"/>
                    <Tabs>
                        <TabList className="flex justify-center gap-6 mt-8 mb-6">
                           <Tab className="text-lg font-semibold outline-none cursor-pointer">Featured</Tab> 
                           <Tab className="text-lg font-semibold outline-none cursor-pointer">Tranding</Tab> 
                           <Tab className="text-lg font-semibold outline-none cursor-pointer">New Arrival</Tab> 
                        </TabList>
                        <TabPanel>
                            <ProductRows productCount={8}/>
                        </TabPanel>
                        <TabPanel>
                            <ProductRows productCount={8}/>
                        </TabPanel>
                        <TabPanel>
                            <ProductRows productCount={8}/>
                        </TabPanel>
                    </Tabs>
                    
                </div>
            </section>
        </Fragment>
    )
}

export default Products;
