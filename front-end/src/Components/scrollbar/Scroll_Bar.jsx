import { AiOutlineArrowUp } from "react-icons/ai";
import Fab from "@mui/material/Fab";

import React, { useEffect, useState, useRef } from "react";
import { Zoom, useScrollTrigger } from "@mui/material";

export default function ScrollBar() {
  let ref = useRef();
  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  const scrolltotop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        sx={fabStyle}
        variant="extended"
        color={"primary"}
        aria-label="add"
        onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </Fab>
    </Zoom>
  );
}
