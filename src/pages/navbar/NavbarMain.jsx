import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./navbarMain.css";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaHandHoldingMedical } from "react-icons/fa";
function NavbarMain() {
  const size = useSelector((state) => state.cart.medicinesCart.length);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Navbar
      expand="lg"
      bg="light"
      style={{
        position: "fixed",
        zIndex: 999,
        top: "0px ",
        left: "0px",
        width: "100%",
        background: "rgb(2,0,36)",
      }}
    >
      <Container fluid>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand href="#">
            <Nav.Item style={{ fontFamily: "sans-serif" }}>
              Medi <FaHandHoldingMedical />{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>Care</span>
            </Nav.Item>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="User Action" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Update Profile
              </NavDropdown.Item>
            </NavDropdown>
            {user.type === "admin" && (
              <Link to="/admin_dasboard" style={{ textDecoration: "none" }}>
                <Nav.Link href="#action1">Admin-Dashboard</Nav.Link>
              </Link>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search your medicines"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="shoopingDiv">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <FaCartArrowDown />
            </Link>
            <span>{size}</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
