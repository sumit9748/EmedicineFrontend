import { MDBBtn, MDBCol, MDBInput, MDBRadio, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const UpdateProfile = () => {
  return (
    <MDBRow>
      <MDBCol
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img alt="update"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
        />
      </MDBCol>

      <MDBCol col="4" md="6">
        <h1 color="yellow">Update-Profile</h1>
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Email address"
          id="formControlLg"
          type="email"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Password"
          id="formControlLg"
          type="password"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="First Name"
          id="formControlLg"
          type="firstname"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Last Name"
          id="formControlLg"
          type="lastname"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Address"
          id="formControlLg"
          type="address"
          size="lg"
        />
        <div className="d-flex justify-content-between mb-4">
          <MDBRadio name="type" value="user" label="User" />
          <MDBRadio name="type" value="admin" label="Admin" />
        </div>

        <div className="text-center text-md-start mt-4 pt-2">
          <MDBBtn className="mb-0 px-5" size="lg">
            Update
          </MDBBtn>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default UpdateProfile;
