import "./sidebar.css";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

import { BiTrendingUp } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";

import { BsFillBarChartFill } from "react-icons/bs";
import { MdOutlineRssFeed } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";

import { Link } from "react-router-dom";

export default function Admin_Leftbar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active" style={{ fontSize: "20px" }}>
              <AiFillHome />
              Home
            </li>
            <li className="sidebarListItem">
              <BiTrendingUp style={{ fontSize: "20px" }} />
              Sales
            </li>
            <li className="sidebarListItem">
              <AiOutlineFieldTime style={{ fontSize: "20px" }} />
              Analytics
            </li>
          </ul>
          <h3 className="sidebarTitle">QuickMenu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link
                to="/userList"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <BsFillPersonLinesFill style={{ fontSize: "20px" }} />
                Users
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link
                to="/productList"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaStore style={{ fontSize: "20px" }} />
                Products
              </Link>
            </li>
            <li className="sidebarListItem">
              <FaCode style={{ fontSize: "20px" }} />
              Transaction
            </li>
            <li className="sidebarListItem">
              <BsFillBarChartFill style={{ fontSize: "20px" }} />
              Reports
            </li>
          </ul>
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <BsFillEnvelopeAtFill style={{ fontSize: "20px" }} />
              Mail
            </li>
            <li className="sidebarListItem">
              <MdOutlineRssFeed style={{ fontSize: "20px" }} />
              Feedback
            </li>
            <li className="sidebarListItem">
              <BsFillChatDotsFill style={{ fontSize: "20px" }} />
              Messages
            </li>
          </ul>
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdWorkHistory style={{ fontSize: "20px" }} />
              Manage
            </li>
            <li className="sidebarListItem">
              <BiTrendingUp style={{ fontSize: "20px" }} />
              Analytics
            </li>
            <li className="sidebarListItem">
              <FaFileContract style={{ fontSize: "20px" }} />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
