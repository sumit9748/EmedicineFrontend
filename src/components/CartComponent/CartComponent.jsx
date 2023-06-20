import React, { useState } from "react";
import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import {
  updateProduct,
  updateQuantity,
  updateTotalPrice,
} from "../../redux/CartRedux";
import { Button } from "@mui/material";

const CartComponent = ({ cart, total, index }) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const quantitities = carts.quantity;
  const [quantity, setQuantity] = useState(quantitities[index]);

  const handleQuantity = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
      dispatch(updateTotalPrice(total + cart.unitPrice));
      dispatch(updateQuantity({ index: index, quantity: quantity + 1 }));
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);

        dispatch(updateTotalPrice(total - cart.unitPrice));
        dispatch(updateQuantity({ index: index, quantity: quantity - 1 }));
      } else {
        setQuantity(1);

        dispatch(updateQuantity({ index: index, quantity: 1 }));

        return;
      }
    }
  };

  const removeCart = () => {
    // console.log(carts);
    let removeAmount =
      carts.medicinesCart[index].unitPrice * carts.quantity[index];

    const newCart = {
      ...carts,
      medicinesCart: [...carts.medicinesCart],
      quantity: [...carts.quantity],
      total: carts.total - removeAmount,
    };

    newCart.medicinesCart.splice(index, 1);
    newCart.quantity.splice(index, 1);

    dispatch(updateProduct(newCart));
  };
  return (
    <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
      <MDBCol md="2" lg="2" xl="2">
        <MDBCardImage
          src={cart.imgUrl}
          fluid
          className="rounded-3"
          alt="Cotton T-shirt"
        />
      </MDBCol>
      <MDBCol md="3" lg="3" xl="3">
        <MDBTypography tag="h6" className="text-muted">
          {cart.name}
        </MDBTypography>
        <MDBTypography tag="h6" className="text-black mb-0">
          {cart.type}
        </MDBTypography>
      </MDBCol>
      <MDBCol
        md="3"
        lg="3"
        xl="3"
        className="d-flex align-items-center justify-content-around"
      >
        <FaArrowUp onClick={() => handleQuantity("increase")} />
        <span>{quantity}</span>
        <FaArrowDown onClick={() => handleQuantity("decrease")} />
      </MDBCol>
      <MDBCol md="3" lg="2" xl="2" className="text-end">
        <MDBTypography tag="h6" className="mb-0">
          {quantitities[index] * cart.unitPrice}
        </MDBTypography>
      </MDBCol>
      <MDBCol md="1" lg="1" xl="1" className="text-end">
        <Button className="mdButton" onClick={() => removeCart()}>
          Remove
        </Button>
      </MDBCol>
    </MDBRow>
  );
};

export default CartComponent;
