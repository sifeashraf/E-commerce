import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero_section from "./Components/Hero/Hero_section";
import { Container } from "react-bootstrap";
import Main from "./Components/Main/Main";
import ScrollBar from "./Components/scrollbar/Scroll_Bar";
export default function App() {
  let { colorMood } = useSelector((state) => state.moodSlice);
  document.querySelector("body").style.background = colorMood === "dark" ? "#1d1f21" : "white";
  return (
    <div className={`app ${colorMood}`}>
      <Header />
      <Container fluid={true}>
        <Hero_section />
        <Main />
        <Outlet />
        <ScrollBar />
      </Container>
    </div>
  );
}
