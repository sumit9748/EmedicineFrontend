import "./admin_body.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsEye } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function WidgetSm({ type = "user" }) {
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
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profileImg
                  ? user.profileImg
                  : "https://www.nicepng.com/png/detail/694-6947152_no-avatar-png.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">
                {user.firstName + " " + user.lastName}
              </span>
              <span className="widgetSmUserTitle">{user.address}</span>
            </div>
            <button className="widgetSmButton">
              <BsEye />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
