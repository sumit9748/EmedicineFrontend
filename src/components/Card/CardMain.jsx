import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../App.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/CartRedux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardMain = ({ m }) => {
  const dispatch = useDispatch();
  const medicineCost = (price, discount) => {
    const rs = (price * (100 - discount)) / 100;

    return rs.toFixed(2);
  };

  const addTocart = (m) => {
    if (m === null) ToastClicker("Sorry no medicine is selected", "err");
    else ToastClicker("Medicine added to cart", "succ");
    dispatch(addProduct({ ...m }));
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
    <Card className="card" style={{ margin: "10px 10px" }}>
      <Card.Img
        variant="top"
        src={
          m.imgUrl
            ? m.imgUrl
            : "https://www.shutterstock.com/image-illustration/medical-drugs-isolated-illustration-flat-260nw-2055949832.jpg"
        }
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{m.name}</Card.Title>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Card.Text>{m.type}</Card.Text>
          <Card.Text style={{ textDecoration: "line-through" }}>
            Rs. {m.unitPrice}
          </Card.Text>
          <Card.Text>{medicineCost(m.unitPrice, m.discount)}</Card.Text>
        </div>
        <Button onClick={() => addTocart(m)} className="mdButton">
          BUY
        </Button>
      </Card.Body>
      <ToastContainer />
    </Card>
  );
};

export default CardMain;
