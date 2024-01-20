//import Hooks
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

//import import component
import { FiMenu } from "react-icons/fi";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Divider,
  Link,
} from "@mui/material";

import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

function Menu() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((value) => !value);
  };
  useEffect(() => {
    document.querySelector("body").style.overflow = show ? "hidden" : "auto";
  }, [show]);

  let animation = {
    open: { height: "100vh" },
    closed: { height: 0 },
  };

  return (
    <div className="menu">
      <i className="pointer" onClick={handleShow}>
        <FiMenu />
      </i>
      {ReactDOM.createPortal(
        <Box
          sx={{ overflow: "hidden" }}
          className="pop-up"
          component={motion.div}
          variants={animation}
          animate={show ? "open" : "closed"}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ width: "100%" }}>
            <Button
              size="large"
              sx={{
                color: "black",
                marginLeft: "auto",
                display: "block",
                fontSize: "1.3rem",
              }}
              onClick={handleShow}
            >
              X
            </Button>
          </Box>
          <Divider
            sx={{
              bgcolor: "white",
              mb: "20px",
              opacity: 1,
              borderWidth: "1.5px",
              width: " 100% ",
              margin: "auto",
            }}
          />
          <Box sx={{ padding: "30px" }}>
            <Accordion disableGutters={true}>
              <AccordionSummary
                sx={{
                  backgroundColor: "#082032",
                  color: "#ffffff",
                  margin: "0px !important",
                }}
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="accordion-1"
                id="accordion-1"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#2c394b" }}>
                <Link color={"black"} href="#" underline="none">
                  underline=none
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters={true}>
              <AccordionSummary
                sx={{ backgroundColor: "#082032", color: "#ffffff" }}
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="accordion-2"
                id="accordion-2"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#2c394b" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters={true}>
              <AccordionSummary
                sx={{ backgroundColor: "#082032", color: "#ffffff" }}
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="accordion-3"
                id="accordion-3"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#2c394b" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters={true}>
              <AccordionSummary
                sx={{ backgroundColor: "#082032", color: "#ffffff" }}
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="accordion-4"
                id="accordion-4"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#2c394b" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters={true}>
              <AccordionSummary
                sx={{ backgroundColor: "#082032", color: "#ffffff" }}
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="accordion-5"
                id="accordion-5"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#2c394b" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters={true}>
              <AccordionSummary
                sx={{ backgroundColor: "#082032", color: "#ffffff" }}
                expandIcon={<AiOutlineArrowDown />}
                aria-controls="accordion-6"
                id="accordion-6"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#2c394b" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>,
        document.querySelector("#root")
      )}
    </div>
  );
}

export default Menu;
