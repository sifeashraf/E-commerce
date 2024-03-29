//import Hooks
import { useDispatch, useSelector } from "react-redux";
import { toggleMood } from "../../globalstate/Slice/moodSlice";

//import import component
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

//import css
import "./header.css";

export default function TopBar() {
  let dispatch = useDispatch();
  let { colorMood } = useSelector((data) => data.moodSlice);
  let chossenmoodbackground = colorMood === "dark" ? "#2B3445" : "#3A4750";
  return (
    <>
      <div
        className="top-bar"
        style={{ color: "white", background: chossenmoodbackground }}
      >
        <div className="left">
          <div className="left-text">
            <p className="left-text-note">HOT</p>
            <p>Free Express Shipping</p>
          </div>
        </div>
        <div className="right">
          <div className="mood-icon">
            {colorMood === "dark" ? (
              <BsMoon
                className="mood-icon-dark pointer"
                width="1.5em"
                height="1.5em"
                onClick={() => dispatch(toggleMood())}
              />
            ) : (
              <BsSun
                className="mood-icon-light pointer"
                width="1.5em"
                height="1.5em"
                onClick={() => dispatch(toggleMood())}
              />
            )}
          </div>
          <select className="select">
            <option>EN</option>
            <option>AR</option>
          </select>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookSquare />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
