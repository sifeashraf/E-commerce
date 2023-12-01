//import import component
import { Swiper, SwiperSlide } from "swiper/react";

//import css
import "swiper/css";
import "swiper/css/pagination";

//import image
import image3 from "../../images/banner-15.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <Swiper
      loop={true}
      spaceBetween={0}
      navigation={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper">
      <SwiperSlide>
        <img src={image3} alt="#" />
        <div className="text">
          <p>LIFESTYLE COLLECTION</p>
          <h2>MEN</h2>
          <p className="text-edit">
            SALES UP TO <span>30% OFF</span>
          </p>
          <span style={{ display: "block" }}>GET FREE SHIPPING ON ORDER OVER 99$</span>
          <button>SHOP NOW</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="#" />
        <div className="text">
          <p>LIFESTYLE COLLECTION</p>
          <h2>MEN</h2>
          <p className="text-edit">
            SALES UP TO <span>30% OFF</span>
          </p>
          <span style={{ display: "block" }}>GET FREE SHIPPING ON ORDER OVER 99$</span>
          <button>SHOP NOW</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
