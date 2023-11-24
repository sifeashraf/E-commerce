import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";

export default function MegaMenu({ colorMood }) {
  return (
    <div className="mega-menu">
      <DropdownButton
        as={ButtonGroup}
        className="mega-menu-dropdown"
        key={"end-0"}
        id={`dropdown-button-drop-end`}
        drop={"down"}
        title={` Home`}>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        className="mega-menu-dropdown"
        key={"end-1"}
        id={`dropdown-button-drop-end`}
        drop={"down"}
        title={` Mega Menu`}>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        className="mega-menu-dropdown"
        key={"end-2"}
        id={`dropdown-button-drop-end`}
        drop={"down"}
        title={` Full screen Menu`}>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        className="mega-menu-dropdown"
        key={"end-3"}
        id={`dropdown-button-drop-end`}
        drop={"down"}
        title={` Pages`}>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        className="mega-menu-dropdown"
        key={"end-4"}
        id={`dropdown-button-drop-end`}
        drop={"down"}
        title={` User Account`}>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        className="mega-menu-dropdown"
        key={"end-5"}
        id={`dropdown-button-drop-end`}
        drop={"down"}
        title={` Vendor Account`}>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
