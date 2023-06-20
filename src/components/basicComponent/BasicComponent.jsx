import { Button } from "react-bootstrap";
import "./basicComponent.css";

import { BsArrowRight } from "react-icons/bs";
export default function BasicComponent({ med, setMedType }) {
  const handleSelectMed = () => {
    setMedType(med.name);
  };
  return (
    <div className="basicComponent">
      <div className="basicComponent_top">
        <img src={med.img} />
      </div>
      <div className="basicComponent_bottom">
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          voluptates voluptatum voluptatem?
        </span>
        <Button className="mdButton" onClick={() => handleSelectMed()}>
          {med.name}
          <BsArrowRight />
        </Button>
      </div>
    </div>
  );
}
