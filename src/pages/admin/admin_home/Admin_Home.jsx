import React from "react";
import Admin_Navbar from "../../../components/admin_component/admin_navbar/Admin_Navbar";
import Admin_Leftbar from "../../../components/admin_component/admin_leftbar/Admin_Leftbar";
import Admin_Body from "../../../components/admin_component/admin_body/Admin_Body";
import "./Admin_Home.css";
const Admin_Home = () => {
  return (
    <div className="adminpage">
      <Admin_Navbar />
      <div className="admin_body_main">
        <Admin_Leftbar />
        <Admin_Body />
      </div>
    </div>
  );
};

export default Admin_Home;
