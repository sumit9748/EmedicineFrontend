import { React, useState } from "react";
import Modal from "@mui/material/Modal";
import { Button, Nav } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import { BsArrowBarRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/CartRedux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CartModalGetter = ({ carts }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState([]);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  function filterArray(arr, filterArr) {
    return arr.filter((x) => filterArr.find((m) => m.id === x.medicineId));
  }

  const addcart = async () => {
    const cartPost = {
      userId: currentUser.id,
      medicines: [],
      medicalShopId: 1,
    };
    for (let i = 0; i < carts.medicinesCart.length; i++) {
      const obj = {};
      obj["item1"] = carts.medicinesCart[i].id;
      obj["item2"] = carts.quantity[i];
      cartPost.medicines.push(obj);
    }

    await axios
      .post("https://localhost:7270/api/Cart", cartPost)
      .then(async () => {
        try {
          const res = await axios.get(
            `https://localhost:7270/api/Cart/MedicinesofUser/${currentUser.id}`
          );

          const allCartsofUser = res.data;

          const newres = filterArray(allCartsofUser, carts.medicinesCart);
          console.log(newres);
          setShowCart(newres);
          // console.log(showCart);
          setOpen(true);
        } catch (err) {
          console.log("hello");

          ToastClicker(`${err.data}`, "err");
        }
      })

      .catch((err) => {
        ToastClicker(`${err.data}`, "err");
      });
  };

  const placeOrder = async () => {
    const newCart = [];
    for (let i = 0; i < showCart.length; i++) {
      newCart.push({
        userId: currentUser.id,
        price: showCart[i].price,
        discount: showCart[i].discount,
        quantity: showCart[i].quantity,
        medicineId: showCart[i].medicineId,
        medicalShopId: showCart[i].medicalShopId,
      });
    }

    const newOrder = {
      userId: currentUser.id,
      medicalShopId: 1,
      carts: newCart,
    };
    console.log(newOrder);
    await axios
      .post("https://localhost:7270/api/Order/AddOrder", newOrder)
      .then(() => {
        ToastClicker("Order placed successfully", "succ");
        dispatch(clearCart());
      });
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
    <>
      <Button className="mdButton" onClick={() => addcart()}>
        ReviewCart
        <BsArrowBarRight />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">SL no</th>
                <th scope="col">Medicine Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {showCart &&
                showCart?.map((sh) => (
                  <tr scope="row">
                    <td>{1}</td>
                    <td>{sh?.medicine.name}</td>
                    <td>{sh?.quantity}</td>
                    <td>{sh?.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Button className="mdButton" onClick={() => placeOrder()}>
            Confirm & Place
          </Button>
        </Box>
      </Modal>
      <ToastContainer />

      {/* <h1>Hlw Order</h1> */}
    </>
  );
};

export default CartModalGetter;
