import React from "react";

const LogoutButton = ({ logoutFunction }) => {
  return (
    <button
      onClick={logoutFunction}
      className="bg-red-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
