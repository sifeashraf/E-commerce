import React, { useEffect, useState } from "react";
import MainFilterBar from "./Main_Filter_Bar";
import MainCard from "./Main_Card";
import { useDispatch, useSelector } from "react-redux";
import { productfetch } from "../../globalstate/Slice/product";
let temp = "";
export default function Main() {
  let dispatch = useDispatch();
  let [product, setProduct] = useState([]);
  let product_fetch = useSelector((data) => data.productSlice.product);
  let { loading } = useSelector((data) => data.productSlice);

  let allProduct = "products?populate=*";
  let menProduct = "products?populate=*&filters[product_category][$eq]=men";
  let womanProduct = "products?populate=*&filters[product_category][$eq]=women";

  useEffect(() => {
    dispatch(productfetch(allProduct));
  }, []);
  useEffect(() => {
    setProduct(product_fetch);
  }, [product_fetch]);
  let filtercatogry = (e) => {
    let chosenCatogry = e === "men" ? menProduct : e === "women" ? womanProduct : allProduct;

    if (e !== temp) {
      temp = e;
      dispatch(productfetch(chosenCatogry));
    }
  };
  return (
    <div className="main">
      <MainFilterBar onclick={filtercatogry} />
      {loading ? (
        <div>please wait... </div>
      ) : product.length ? (
        <div className="main-product-list">
          {product.length > 0 &&
            product.map((item, idx) => (
              <MainCard
                img={item.attributes.product_img.data[0].attributes.url}
                title={item.attributes.product_title}
                price={item.attributes.product_price}
                bodyText={item.attributes.product_description}
                rating={item.attributes.product_rating}
              />
            ))}
        </div>
      ) : (
        <div class="">error</div>
      )}
    </div>
  );
}
