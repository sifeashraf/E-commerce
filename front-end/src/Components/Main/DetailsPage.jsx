import React, { useEffect, useState, dangerouslySetInnerHTML } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styled } from "@mui/material/styles";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import { Pagination, Navigation } from "swiper/modules";
import { productfetch } from "../../globalstate/Slice/product";

export default function Detailspage() {
  let [productdetails, setproductdetails] = useState({});
  let { productdata } = useSelector((product) => product.productSlice);
  let { colorMood } = useSelector((state) => state.moodSlice);

  document.querySelector("body").style.background = colorMood === "dark" ? "#1d1f21" : "white";
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "black",
    },
  });
  useEffect(() => {
    setproductdetails(productdata);
  }, [productdata]);

  return (
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
          {productdetails?.product_img?.map((img) => (
            <SwiperSlide>
              <img src={img.attributes.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product-details">
        <h2 style={{ textAlign: "center" }}>{productdetails.product_title}</h2>
        <div style={{ display: "flex", gap: "5px" }}>
          car rating:
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
  );
}
