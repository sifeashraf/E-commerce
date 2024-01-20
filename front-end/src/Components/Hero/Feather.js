//import import component
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosMedal } from "react-icons/io";
import { GiAlarmClock } from "react-icons/gi";
import { BiCreditCard } from "react-icons/bi";

export default function Feather() {
  return (
    <div className="feather mb-bottom">
      <div className="feather-box">
        <i>
          <AiFillThunderbolt />
        </i>
        <div className="text">
          <p>FAST DELIVERY</p>
          <span>START FROM $10</span>
        </div>
      </div>
      <div className="feather-box">
        <i>
          <IoIosMedal />
        </i>
        <div className="text">
          <p>Money Guarantee</p>
          <span>7 Days Back</span>
        </div>
      </div>
      <div className="feather-box">
        <i>
          <GiAlarmClock />
        </i>
        <div className="text">
          <p>365 Days</p>
          <span>For free return</span>
        </div>
      </div>
      <div className="feather-box">
        <i>
          <BiCreditCard />
        </i>
        <div className="text">
          <p>Payment</p>
          <span>Secure system</span>
        </div>
      </div>
    </div>
  );
}
