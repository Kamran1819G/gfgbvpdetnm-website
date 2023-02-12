import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import GFGBVDUDET from "../../assets/Images/GFGBVDUDETNM.png";

import "./NavbarComponent.css";
function NavbarComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
      >
        <Container>
          <Navbar.Brand
            href="/home"
            style={{ fontFamily: "Syne", color: "var(--secondary-color)" }}
          >
            <img src={GFGBVDUDET} width="50" height="50" alt="logo" />
            GFG BVDUDET NM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="#upcomingevents">
                Events
              </Nav.Link>
              <Nav.Link
                href="https://auth.geeksforgeeks.org/college/bharati-vidyapeeth-deemed-to-be-university-department-of-engineering-and-technology-navi-mumbai/"
                target="_blank"
              >
                Leaderboard
              </Nav.Link>
              <Nav.Link as={HashLink} to="#blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/team">
                Team
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <div className="custom-contact">
                <Nav.Link onClick={handleShow}>Contact</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row justify-content-center ms-auto">
            <div className="col-lg-10">
              <h1>
                <span style={{ color: "var(--secondary-color)" }}>
                  Write us
                </span>{" "}
                something
              </h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="contact-form">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Full Name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                      <Form.Label>Email</Form.Label>
                      <Form.Control required type="email" placeholder="Email" />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        required
                        as="textarea" rows={4}
                        placeholder="Type your message here..."
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid message.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Button type="submit" className="submit-button btn">Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
