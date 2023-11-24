import React from "react";
import { Button } from "react-bootstrap";
import photo2 from "../../images/2.jpg";
import { Col, Row } from "react-bootstrap";

export default function PopUp({ disaplepopup, id }) {
  let root = document.getElementById("root");

  document.querySelector("body").classList.add("modal-open");

  return (
    <div className="popup" key={id}>
      <div class="popup-box">
        <div style={{ backgroundImage: `url(${photo2})` }} className="popup-img"></div>
        <div class="popup-text">
          <div class="popup-text-header">
            <h3 class="main-popup-title">this an head title</h3>
            <Button
              variant="outline-primary"
              className="close-btn"
              onClick={() => {
                document.querySelector("body").classList.remove("modal-open");
                disaplepopup();
              }}>
              X
            </Button>{" "}
          </div>
          <div class="popup-text-body">
            <span class="">$12.99</span>
            <p></p>
            <div class="popup-img-slider">
              <img src={photo2} />
              <img src={photo2} />
            </div>
          </div>
          <Button variant="primary" className="purchbtn">
            BUY NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
