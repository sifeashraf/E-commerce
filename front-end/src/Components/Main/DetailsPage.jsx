//import Hooks
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { productfetch } from "../../globalstate/Slice/product";
//import import component
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Pagination, Navigation } from "swiper/modules";
//import css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import image
import mona from "../../images/mona-loading-dark-7701a7b97370.gif";

export default function Detailspage() {
  let [productdetails, setproductdetails] = useState({});
  let { id } = useParams();
  let dispatch = useDispatch();

  let { productdata, loading, error, errormessge } = useSelector((product) => product.productSlice);
  let { colorMood } = useSelector((state) => state.moodSlice);
  document.querySelector("body").style.background = colorMood === "dark" ? "#1d1f21" : "white";
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "black",
    },
  });

  useEffect(() => {
    if (Object.keys(productdata).length > 0) {
      setproductdetails(productdata);
    } else {
      dispatch(productfetch(id));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(productdetails).length === 0) {
      setproductdetails(productdata);
    }
  }, [productdata]);

  return loading ? (
    <div className="loading">
      <img className="mona" src={mona} alt="loading gif mona" />
      Please Wait a Second...
    </div>
  ) : Object.keys(productdetails).length > 0 ? (
    <div className={`details ${colorMood}`}>
      <div className="img-preview">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ width: "100%", height: "100%" }}>
          {productdetails?.product_img.data.map((img) => (
            <SwiperSlide>
              <img src={img.attributes.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product-details">
        <h2 style={{ textAlign: "center" }}>{productdetails.product_title}</h2>
        <div style={{ display: "flex", gap: "5px" }}>
          product rating:
          <StyledRating
            name="half-rating-read"
            defaultValue={productdetails?.product_rating}
            precision={0.5}
            readOnly
          />
        </div>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: productdetails?.product_description }}></p>
        <Button
          variant="contained"
          sx={{
            display: "block",
            width: 300,
            color: "black",
            margin: "auto",
          }}>
          Get FOR: {productdetails?.product_price}$ only
        </Button>
      </div>
    </div>
  ) : (
    error && <div className="error">{errormessge?.message}</div>
  );
}
