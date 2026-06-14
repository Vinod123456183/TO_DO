import React, { useContext, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/user-slice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";
  const inputBg = isDark
    ? "bg-[#1e1e1e] text-white placeholder-gray-400"
    : "bg-white text-black placeholder-gray-500";
  const borderColor = isDark ? "border-gray-600" : "border-gray-300";
  const ringColor = isDark
    ? "focus:ring-gray-400 focus:border-gray-400"
    : "focus:ring-blue-500 focus:border-blue-500";
  const containerBg = isDark
    ? "bg-[#141414] text-white"
    : "bg-[#e1e1e1] text-black";
  const txtClr = isDark ? " text-black" : " text-gray-200";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return setError("All Fields Are Required !! ");
    }
    setError("");

    try {
      dispatch(signInStart());
      const res = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success === false) {
        dispatch(signInFailure(res.data.message));
        return setError(res.data.message);
      }

      dispatch(signInSuccess(res.data.user));
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      dispatch(signInFailure(errorMessage));
      setError(errorMessage);
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className={` ${containerBg} border shadow-md rounded-lg p-8 w-full max-w-sm `}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-3">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border ${txtClr} ${inputBg} border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="i_miss_u_babu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 border ${txtClr} ${inputBg} border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {error && <p className="text-red-500 text-center pb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 mt-1 rounded-md hover:bg-blue-700 transition"
        >
          Log-In
        </button>

        <div className="flex flex-col items-center mt-3 gap-2">
          <p>or</p>
          <a href="/signup" className="text-blue-600">
            Don’t have an account? Signup
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
