import { React, useEffect, useState } from "react";

import AccordianMain from "../../accordian/AccordianMain";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

import "./admin_body.css";
import { useSelector } from "react-redux";

export default function Admin_Body() {
  const [type, setType] = useState([]);
  const [users, setUsers] = useState([]);
  const [medicalShops, setMedicalShops] = useState([]);
  const cuser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const handleOpen = async () => {
      if (type === "user") {
        await axios
          .get("https://localhost:7270/api/User/AllUser", {
            headers: {
              Authorization: `Bearer ${cuser.token}`,
            },
          })
          .then((res) => {
            setUsers(res.data);
          })
          .catch((err) => {});
      } else {
        await axios
          .get("https://localhost:7270/api/Medicine/AllMedicalShops", {
            headers: {
              Authorization: `Bearer ${cuser.token}`,
            },
          })
          .then((res) => {
            setMedicalShops(res.data);
          })
          .catch((err) => {});
      }
    };
    handleOpen();
  }, [type]);

  return (
    <>
      <div className="admin_body">
        {type === "user"
          ? users.map((user) => (
              <>
                <Typography>
                  <AccordianMain user={user} />
                </Typography>
                <hr />
              </>
            ))
          : medicalShops.map((medicalShop) => (
              <>
                <Typography>
                  <AccordianMain medicalShop={medicalShop} />
                </Typography>

                <hr />
              </>
            ))}
      </div>
    </>
  );
}
