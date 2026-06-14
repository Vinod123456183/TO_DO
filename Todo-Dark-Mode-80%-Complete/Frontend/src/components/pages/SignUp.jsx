import React, { useContext, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ⛔ You forgot to import axios

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const containerBg = isDark
    ? "bg-[#141414] text-white"
    : "bg-[#e1e1e1] text-black";

  const inputBg = isDark
    ? "bg-[#1e1e1e] text-white placeholder-gray-400"
    : "bg-white text-black placeholder-gray-500";

  const borderColor = isDark ? "border-gray-600" : "border-gray-300";
  const ringColor = isDark
    ? "focus:ring-gray-400 focus:border-gray-400"
    : "focus:ring-blue-500 focus:border-blue-500";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      return setError("All Fields Are Required!!");
    }

    setError(""); // ✅ Clear previous error

    try {
      const res = await axios.post(
        "http://localhost:3000/signup",
        {
          userName,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success === false) {
        return setError(res.data.message); // ✅ Handle server error
      }

      setError(""); // ✅ Clear error before redirect
      navigate("/login");
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-sm p-8 rounded-lg shadow-md border border-gray-500 ${containerBg}`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your name..."
            className={`w-full px-3 py-2 rounded-md border ${inputBg} ${borderColor} outline-none focus:ring-2 ${ringColor}`}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className={`w-full px-3 py-2 rounded-md border ${inputBg} ${borderColor} outline-none focus:ring-2 ${ringColor}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="i_miss_u_babu"
            className={`w-full px-3 py-2 rounded-md border ${inputBg} ${borderColor} outline-none focus:ring-2 ${ringColor}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-center pb-4">{error}</p>}{" "}
        {/* ✅ Error shown only if present */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 mt-1 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
        <div className="flex flex-col items-center mt-3 gap-2">
          <p>or</p>
          <a href="/login" className="text-blue-600">
            Already have an account? Login
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
