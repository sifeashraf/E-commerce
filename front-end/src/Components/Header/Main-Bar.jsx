import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdPersonOutline, MdSearch } from "react-icons/md";
export default function MainBar({ colorMood }) {
  let selctedcolor = colorMood === "dark" ? "white" : "black";
  return (
    <div className="mainbar">
      <div className="logo">
        <i>
          <HiOutlineShoppingCart color={selctedcolor} />
        </i>
        <p style={{ color: selctedcolor }}>E-commerce</p>
      </div>
      <div className="search">
        <i>
          <MdSearch />
        </i>
        <input type="search" className="input-search" placeholder="search..." />
        <select>
          <option>All Catgory</option>
        </select>
      </div>
      <div className="wishlist-account">
        <a>
          <HiOutlineShoppingCart className="pointer" color={selctedcolor} />
          <div className="badge">1</div>
        </a>
        <a>
          <MdPersonOutline className="pointer" color={selctedcolor} />
        </a>
      </div>
    </div>
  );
}
