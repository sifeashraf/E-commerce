//import component
import { Button } from "@mui/material";
//import css
import "./main.css";
export default function MainFilterBar({ onclick }) {
  const handlebuttonclick = (e) => {
    const btn = document.querySelectorAll(".main-btn");
    btn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    onclick(e.target.value);
  };
  const buttonstyle = {
    "&:hover": {
      color: "white",
      backgroundColor: "#d32f2f",
    },
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
          variant="outlined"
          color="error"
          className="main-btn"
          onClick={(e) => handlebuttonclick(e)}
          sx={buttonstyle}
        >
          All Product
        </Button>
        <Button
          variant="outlined"
          color="error"
          className="main-btn"
          value={"men"}
          sx={buttonstyle}
          onClick={(e) => handlebuttonclick(e)}
        >
          MEN Category
        </Button>
        <Button
          variant="outlined"
          color="error"
          className="main-btn"
          value={"women"}
          sx={buttonstyle}
          onClick={(e) => handlebuttonclick(e)}
        >
          WOMEN Category
        </Button>
      </div>
    </div>
  );
}
