import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordianMain({ user, medicalShop }) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div>
      {user ? (
        <Accordion>
          <AccordionSummary
            //   expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div style={{ diplay: "flex", alignItems: "center" }}>
              <Avatar {...stringAvatar(user.firstName + " " + user.lastName)} />

              {user.firstName + " " + user.lastName}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="parellel">
              <label className="parallel_label">Name:-</label>
              {user.address}
            </div>
            <div className="parellel">
              <label className="parallel_label">Email:-</label>
              {user.email}
            </div>
            <div className="parellel">
              <label className="parallel_label">Status:-</label>
              {user.status}
            </div>
          </AccordionDetails>
        </Accordion>
      ) : (
        <Accordion>
          <AccordionSummary
            //   expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div style={{ diplay: "flex", alignItems: "center" }}>
              <Avatar
                {...stringAvatar(medicalShop.name + " " + "medicalShop")}
              />

              {medicalShop.name}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="parellel">
              <label className="parallel_label">Id:-</label>
              {medicalShop.id}
            </div>
            <div className="parellel">
              <label className="parallel_label">Name:-</label>
              {medicalShop.name}
            </div>
            <div className="parellel">
              <label className="parallel_label">Rating:-</label>
              {medicalShop.rating}
            </div>
            <div className="parellel">
              <label className="parallel_label">Address:-</label>
              {medicalShop.address}
            </div>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
}
