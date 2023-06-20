import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHandHoldingMedical } from "react-icons/fa";

import "./admin_navbar.css"; // Import the CSS file for styling

function Admin_Navbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "70px" }}>
        <Container>
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: "none", margin: "0px 20px" }}>
              <Navbar.Brand href="#">
                <Nav.Item style={{ fontFamily: "sans-serif" }}>
                  Medi <FaHandHoldingMedical />{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Care
                  </span>
                </Nav.Item>
              </Navbar.Brand>
            </Link>
            <>
              <Link to="/adminView/user" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action1">ViewUser</Nav.Link>
              </Link>
              <Link
                to="/adminView/medicalShops"
                style={{ textDecoration: "none" }}
              >
                <Nav.Link href="#action1">ViewMedicalShop</Nav.Link>
              </Link>

              <Link to="/addMedicine" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action1">AddMedicine</Nav.Link>
              </Link>
            </>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Admin_Navbar;
