//import Hooks
import { useSelector } from "react-redux";

//import component
import { Dropdown } from "react-bootstrap";

export default function CatgoryDropDown() {
  let { colorMood } = useSelector((state) => state.moodSlice);

  let selctedcolor = colorMood === "dark" ? "white" : "black";

  return (
    <div className="catgory-drop-down">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
