import {
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import NavbarMain from "../navbar/NavbarMain";

import axios from "axios";
import { medicalShops } from "../../FunctionalComponents/Medicalshops";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiFillCamera } from "react-icons/ai";

const AddMedicine = () => {
  const [medInput, setMedInput] = useState({
    name: "",
    manufacturer: "",
    price: 0,
    discount: 0,
    date: new Date(),
    type: "",
    imgUrl: "",
    medicalShops: [],
  });

  const handleChange = (e) => {
    setMedInput({ ...medInput, [e.target.name]: e.target.value });
  };

  const handleAddMedicine = async () => {
    await axios
      .post("https://localhost:7270/api/Medicine/Medicine", medInput)
      .then((res) => {
        ToastClicker("Medicine added successfully !", "succ");
      })

      .catch((error) => {
        ToastClicker("Medicine already exists !", "err");
      });
  };

  const handleMedicalshops = (num) => {
    if (medInput.medicalShops.includes(num)) {
      const index = medInput.medicalShops.indexOf(num);
      medInput.medicalShops.splice(index, 1);
    } else {
      medInput.medicalShops.push(num);
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
  return (
    <div style={{ marginTop: "40px", padding: "40px" }}>
      <MDBRow style={{ overflowY: "hidden" }}>
        <MDBCol
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiFillCamera style={{ fontSize: "50px", cursor: "pointer" }} />
        </MDBCol>

        <MDBCol col="3" md="6">
          <h1 color="yellow">Add Medicine</h1>
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Medicine Name"
            id="formControlLg"
            type="text"
            size="lg"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Manufacturer"
            id="formControlLg"
            type="text"
            size="lg"
            name="manufacturer"
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Unit Price"
            id="formControlLg"
            type="number"
            size="lg"
            name="price"
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Discount"
            id="formControlLg"
            type="number"
            size="lg"
            name="discount"
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Experiy date"
            id="formControlLg"
            type="date"
            size="lg"
            name="date"
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            wrapperClass="mb-4"
            placeholder="Type"
            id="formControlLg"
            type="text"
            size="lg"
            name="type"
            onChange={(e) => handleChange(e)}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "90%",
            }}
          >
            {medicalShops.map((m, index) => {
              return (
                <MDBCheckbox
                  label={m}
                  onChange={() => handleMedicalshops(index + 1)}
                  style={{ alignItems: "center" }}
                />
              );
            })}
          </div>

          <MDBBtn className="mb-0 px-5" onClick={() => handleAddMedicine()}>
            Add
          </MDBBtn>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            closeOnClick
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default AddMedicine;
