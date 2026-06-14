import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
      <Link to="/">
        <div className="text-xl  font-bold text-blue-600  transition">
          QuickNote
        </div>
      </Link>
  );
}

export default Logo;
