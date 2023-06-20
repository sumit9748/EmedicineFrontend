import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((user) => user.error);

  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    login(dispatch, userLogin, navigate);
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <h1 color="yellow">Sign-In</h1>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            name="email"
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            name="password"
            onChange={handleChange}
          />
          {error == true && (
            <h1 style={{ color: "red" }}>Sorry no user found</h1>
          )}

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <Button className="mdButton" onClick={() => handleSubmit()}>
              Login
            </Button>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <a href="#!" className="link-danger">
                Register
              </a>
            </p>
          </div>
        </MDBCol>
      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
      </div>
    </MDBContainer>
  );
}

export default Login;
