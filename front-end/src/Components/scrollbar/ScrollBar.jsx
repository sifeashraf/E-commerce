import { AiOutlineArrowUp } from "react-icons/ai";
import Fab from "@mui/material/Fab";
import React, { useEffect, useRef } from "react";
import { Zoom, useScrollTrigger } from "@mui/material";

export default function ScrollBar() {
  let ref = useRef();
  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };
  useEffect(() => {
    ref.current = window.innerWidth;
    console.log(ref);
  }, []);
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab sx={fabStyle} variant="extended" color={"primary"} aria-label="add">
        <AiOutlineArrowUp />
      </Fab>
    </Zoom>
  );
}
