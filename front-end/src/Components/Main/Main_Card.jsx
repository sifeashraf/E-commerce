import React, { useState } from "react";
import photo2 from "../../images/2.jpg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { createPortal } from "react-dom";

import { Col } from "react-bootstrap";

import { MdAddShoppingCart } from "react-icons/md";
import PopUp from "./PopUp";
export default function MainCard({ img, title, price, bodyText, rating }) {
  const [showportal, setShowPortal] = useState(false);
  return (
    <div className="main-card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="card-body">
        <div className="card-header">
          <h5>{title}</h5>
          <span>${price}</span>
        </div>
        <div className="card-text">{bodyText}</div>
        <div className="card-bottom">
          <div className="card-add" onClick={() => setShowPortal(true)}>
            <i>
              <MdAddShoppingCart />
            </i>
            <span>Add To Cart</span>
          </div>
          <div className="card-rating">
            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </Stack>
          </div>
        </div>
      </div>
      {showportal &&
        createPortal(
          <PopUp disaplepopup={() => setShowPortal(false)} />,
          document.getElementById("root")
        )}
    </div>
  );
}
