import axios from "axios";
import React, { useEffect, useState } from "react";

import NavbarMain from "../navbar/NavbarMain";
import CardMain from "../../components/Card/CardMain";
import BasicComponent from "../../components/basicComponent/BasicComponent";
import { medicalTypes } from "../../FunctionalComponents/Medicalshops";
import "./home.css";
import Footer from "../footer/Footer";

const Home = () => {
  const [medicines, setMedicines] = useState([]);
  const [medType, setMedType] = useState("");

  useEffect(() => {
    const getMedicines = async () => {
      try {
        if (medType === "") {
          const response = await axios.get(
            `https://localhost:7270/api/Medicine/AllMedicines`
          );
          setMedicines(response.data);
        } else {
          const response = await axios.get(
            `https://localhost:7270/api/Medicine/FilterByType/${medType}`
          );
          setMedicines(response.data);
        }
      } catch (exe) {
        // console.log(exe);
      }
    };
    getMedicines();
  }, [medType]);

  // console.log(medType);

  return (
    <>
      <div className="home">
        <h2>Medicine Types</h2>

        <div className="basicCompo">
          {medicalTypes.map((med) => (
            <BasicComponent med={med} setMedType={setMedType} />
          ))}
        </div>

        <hr />
        <h2>Medicine stocks</h2>

        <div className="home_medicineContainer">
          {medicines.length > 0 ? (
            medicines?.map((m) => <CardMain m={m} />)
          ) : (
            <h3 style={{ color: "gray", fontFamily: "initial" }}>
              Sorry No medicines found
            </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
