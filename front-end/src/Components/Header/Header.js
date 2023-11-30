// import Hooks
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

//import component
import TopBar from "./TopBar";
import MainBar from "./Main-Bar";
import MegaMenu from "./catgory bar/Mega_Menu";
import CatgoryDropDown from "./catgory bar/Catgory_DropDown";
import Menu from "./catgory bar/Menu";

export default function Header() {
  let screensize = useMediaQuery(`(min-width:1000px)`);

  return (
    <div className="header">
      <TopBar />
      <MainBar />
      <div className="mainbar">
        <CatgoryDropDown />
        {screensize ? <MegaMenu /> : <Menu />}
      </div>
    </div>
  );
}
