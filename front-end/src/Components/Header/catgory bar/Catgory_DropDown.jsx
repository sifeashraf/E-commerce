import React from "react";
import { Dropdown } from "react-bootstrap";

export default function CatgoryDropDown({ colorMood }) {
  let selctedcolor = colorMood === "dark" ? "white" : "black";

  return (
    <div className="catgory-drop-down">
      <Dropdown>
        <Dropdown.Toggle
          style={{
            background: colorMood === "dark" ? "rgb(43 53 61)" : "#ffffff",
            color: selctedcolor,
          }}
          id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
