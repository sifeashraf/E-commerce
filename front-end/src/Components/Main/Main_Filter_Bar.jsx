import React from "react";
import { Button } from "react-bootstrap";
import "./main.css";
import { motion } from "framer-motion";

export default function MainFilterBar({ onclick }) {
  const handlebuttonclick = (e) => {
    let btn = document.querySelectorAll(".main-btn");
    btn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    onclick(e.target.value);
  };
  return (
    <div className="main-filter-bar">
      <div className="main-text">
        <h3>Selected Product</h3>
        <p>All our arrivals in a exclusive brand section</p>
      </div>
      <div className="main-filter">
        <Button
          value={"all"}
          variant="outline-danger"
          className="main-btn"
          onClick={(e) => handlebuttonclick(e)}>
          All Product
        </Button>
        <Button
          variant="outline-danger"
          className="main-btn"
          value={"men"}
          onClick={(e) => handlebuttonclick(e)}>
          MEN Category
        </Button>
        <Button
          variant="outline-danger"
          className="main-btn"
          value={"women"}
          onClick={(e) => handlebuttonclick(e)}>
          WOMEN Category
        </Button>
      </div>
    </div>
  );
}
