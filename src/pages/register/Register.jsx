import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBRadio,
} from "mdb-react-ui-kit";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";

function Register() {
  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
    address: "",
    status: "online",
    token: "",
  });

  const handleChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://localhost:7270/api/User/Register",
        userRegister
      );
      ToastClicker("Successfully registered", "succ");
    } catch (err) {
      // console.log(err);
      ToastClicker(err.response.data, "err");
    }
  };

  const ToastClicker = (sms, decider) => {
    if (decider === "succ") {
      toast.success(`${sms}`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.error(`${sms}`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  console.log(userRegister);

  return (
    <MDBContainer fluid>
      <h1>SignUp</h1>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="First Name"
                  id="form1"
                  type="text"
                  className="w-100"
                  name="firstName"
                  required
                  onChange={handleChange}
                />
                <MDBInput
                  label="Last Name"
                  id="form1"
                  type="text"
                  className="w-100"
                  name="lastName"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form2"
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your address"
                  id="form2"
                  type="text"
                  name="address"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  required
                  id="form3"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" required size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                />
              </div>
              <p>Type of User</p>
              <div className="mb-4 d-flex flex-row">
                <MDBRadio
                  value="user"
                  id="flexCheckDefault"
                  label="User"
                  name="type"
                  onChange={handleChange}
                />
                <MDBRadio
                  value="admin"
                  id="flexCheckDefault"
                  label="Admin"
                  name="type"
                  onChange={handleChange}
                />
              </div>

              <Button className="mdButton" onClick={() => handleSubmit()}>
                Register
              </Button>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <ToastContainer />
    </MDBContainer>
  );
}

export default Register;
