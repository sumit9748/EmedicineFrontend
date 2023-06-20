import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./UserRedux";

export const login = async (dispatch, userLogin, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://localhost:7270/api/Auth/Login",
      userLogin
    );
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailure());
  }
};
