import React from "react";
import ToggleButton from "./ToggleButton";
import LogoutButton from "../LogoutButton";
import { useDispatch, useSelector } from "react-redux"; // ✅ useSelector added
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  signoutStart,
  signoutSuccess,
  signoutFailure,
} from "../redux/user/user-slice";

function ProfileInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user); // ✅ Get user from Redux

  const logoutFunction = async () => {
    try {
      dispatch(signoutStart());
      const res = await axios.get("http://localhost:3000/logout", {
        withCredentials: true,
      });

      if (res.data.success === false) {
        dispatch(signoutFailure(res.data.message));
        return;
      }

      dispatch(signoutSuccess());
      navigate("/login");
    } catch (error) {
      dispatch(signoutFailure(error.message));
    }
  };
  // console.log("currentUser from Redux:", currentUser);

  return (
    // <div className="p-2 ">
      <div className="flex  items-center  w-full     gap-3 lg:gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full hidden lg:block"
        />
        <div>
          <p className="font-medium text-sm">
            {currentUser?.userName || "Guest"}
          </p>
          <p className="text-xs text-gray-500">
            {currentUser?.email || "No email"}
          </p>
        </div>
        <ToggleButton />
        <LogoutButton logoutFunction={logoutFunction} />
      </div>
    // </div>
  );
}

export default ProfileInfo;
