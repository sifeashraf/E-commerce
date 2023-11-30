//import Hooks
import { useState } from "react";

//import import component
import { Modal, Accordion, Stack, Container } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="menu">
      <i className="pointer" onClick={handleShow}>
        <FiMenu />
      </i>
      <Container>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          fullscreen={true}
          keyboard={false}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Home</Accordion.Header>
                <Accordion.Body>
                  <Stack gap={3}>
                    <div className="p-2">First item</div>
                    <div className="p-2">Second item</div>
                    <div className="p-2">Third item</div>
                  </Stack>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Mega Menu</Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <Stack gap={3}>
                    <div className="p-2">First item</div>
                    <div className="p-2">Second item</div>
                    <div className="p-2">Third item</div>
                  </Stack>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Pages</Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <Stack gap={3}>
                    <div className="p-2">First item</div>
                    <div className="p-2">Second item</div>
                    <div className="p-2">Third item</div>
                  </Stack>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>User Account</Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <Stack gap={3}>
                    <div className="p-2">First item</div>
                    <div className="p-2">Second item</div>
                    <div className="p-2">Third item</div>
                  </Stack>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Vendor Account</Accordion.Header>
                <Accordion.Body>
                  {" "}
                  <Stack gap={3}>
                    <div className="p-2">First item</div>
                    <div className="p-2">Second item</div>
                    <div className="p-2">Third item</div>
                  </Stack>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Menu;
