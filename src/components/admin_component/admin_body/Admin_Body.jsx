import React, { useEffect, useState } from "react";
import WidgetSm from "./Smwidget";
import WidgetLg from "./Bgwidget";
import "./admin_body.css";
import Chart from "../adminchart/Admin_Chart";
import axios from "axios";
const Admin_Body = () => {
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    const getOrderByMonth = async () => {
      await axios
        .get("https://localhost:7270/api/Order/orderStatistics")
        .then((res) => {
          setUserState(res.data);
        })
        .catch((err) => {});
    };
    getOrderByMonth();
  }, []);

  console.log(userState);
  return (
    <div className="admin_body">
      <Chart title="Order Statistics" data={userState} dataKey="total" grid />
      <WidgetSm />
      <WidgetLg />
    </div>
  );
};

export default Admin_Body;
