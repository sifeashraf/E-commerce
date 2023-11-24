import React from "react";
import ProductBox from "./ProductBox";
import Slider from "./Slider";
import "./hero.css";
import Feather from "./Feather";
export default function Hero_section() {
  return (
    <div className="hero">
      <div className="slider-offers">
        <Slider />
        <ProductBox />
      </div>
      <Feather />
    </div>
  );
}
