import axios from "axios";
import "./admin_body.css";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          "https://localhost:7270/api/Order/allOrders"
        );
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Customer</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Amount
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={order.index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.user.firstName + " " + order.user.lastName}
                </TableCell>
                <TableCell align="right">{format(order.dateTime)}</TableCell>
                <TableCell align="right">{order.orderTotal}</TableCell>
                <TableCell align="right">{order.orderStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
