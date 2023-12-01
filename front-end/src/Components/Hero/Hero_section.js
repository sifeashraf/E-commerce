//import import component
import ProductBox from "./ProductBox";
import Slider from "./Slider";
import Feather from "./Feather";

//import css
import "./hero.css";

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
