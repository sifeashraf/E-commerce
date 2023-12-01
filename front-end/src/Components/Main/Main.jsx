//import Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsfetch } from "../../globalstate/Slice/product";

//import import component
import MainFilterBar from "./Main_Filter_Bar";
import MainCard from "./Main_Card";
//import image
import mona from "../../images/mona-loading-dark-7701a7b97370.gif";
// variables
let allProduct = "products?populate=*";
let menProduct = "products?populate=*&filters[product_category][$eq]=men";
let womanProduct = "products?populate=*&filters[product_category][$eq]=women";
let temp = "";
export default function Main() {
  let dispatch = useDispatch();
  let [product, setProduct] = useState([]);

  let product_fetch = useSelector((data) => data.productSlice.product);
  let { loading, error, errormessge } = useSelector((data) => data.productSlice);

  useEffect(() => {
    if (Object.keys(product_fetch).length === 0) {
      dispatch(productsfetch(allProduct));
    } else {
      setProduct(product_fetch);
    }
  }, [product_fetch]);

  let filtercatogry = (e) => {
    let chosenCatogry = e === "men" ? menProduct : e === "women" ? womanProduct : allProduct;
    if (e !== temp) {
      temp = e;
      dispatch(productsfetch(chosenCatogry));
    }
  };

  return (
    <div className="main">
      <MainFilterBar onclick={filtercatogry} />
      {loading ? (
        <div className="loading">
          <img className="mona" src={mona} alt="loading gif mona" />
          Please Wait One More Second...
        </div>
      ) : product.length ? (
        <div className="main-product-list">
          {product.length > 0 &&
            product.map((item, idx) => (
              <MainCard
                key={idx}
                id={item.id}
                img={item.attributes.product_img.data}
                title={item.attributes.product_title}
                price={item.attributes.product_price}
                description={item.attributes.product_description}
                rating={item.attributes.product_rating}
              />
            ))}
        </div>
      ) : (
        error && (
          <div className="error">
            {errormessge?.error?.status === 401
              ? "please wait we are fixing server"
              : errormessge?.message}
          </div>
        )
      )}
    </div>
  );
}
