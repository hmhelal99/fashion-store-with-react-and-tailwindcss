import { Fragment, useEffect, useState} from "react";
import ProductItem from "./item.product";
import products from "../../data/products";

const ProductRows = () => {
 const [rendomProducts, setRendomProducts] = useState([]);

 useEffect(()=>{
    setRendomProducts( products.sort(() => Math.random() - 0.5))
 },[''])

  return (
    
    <Fragment>
      <div className="flex py-1 flex-wrap">
        {products.map((item) => {
          return <ProductItem key={Math.random()} product={item} />;
        })}
      </div>
    </Fragment>
  );
};

export default ProductRows;
