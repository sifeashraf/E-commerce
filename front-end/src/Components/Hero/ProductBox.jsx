//import import component
import { BiRightArrowAlt } from "react-icons/bi";

//import image
import image1 from "../../images/banner-16.jpg";
import image2 from "../../images/banner-17.jpg";

export default function ProductBox() {
  return (
    <div className="product-box">
      <div className="box" style={{ backgroundImage: `url(${image2})`, marginBottom: "10px" }}>
        <div className="text">
          <h5>NEW ARRIVALS</h5>
          <p>
            SUMMER <br />
            SALES 20% OFF
          </p>
          <a href="#">
            SHOP NOW <BiRightArrowAlt />
          </a>
        </div>
      </div>
      <div className="box" style={{ backgroundImage: `url(${image1})` }}>
        <div className="text">
          <h5>GAMING 4K </h5>
          <p>
            DESKTOP & <br />
            LAPTOPS
          </p>
          <a href="#">
            SHOP NOW
            <BiRightArrowAlt />
          </a>
        </div>
      </div>
    </div>
  );
}
