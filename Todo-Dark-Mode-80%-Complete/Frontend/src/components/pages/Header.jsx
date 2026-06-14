import React, { useState, useContext } from "react";
import Search from "./SearchBar";
import ProfileInfo from "./ProfileInfo";
import Logo from "./Logo";
import { ThemeContext } from "../utils/ThemeContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme } = useContext(ThemeContext);

  const shadowStyle =
    theme === "light"
      ? "shadow-md shadow-gray-300"
      : "shadow-md shadow-gray-900";

  return (
    <header
      className={`flex flex-col md:flex-row  items-center justify-between py-4 px-4 sm:px-6 md:px-8 w-full  ${shadowStyle}`}
    >
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Logo />
      </div>

      <div className="flex items-center  flex-col w-full lg:w-auto gap-3 lg:gap-5 md:flex-row  p-2   justify-between lg:justify-center md:justify-end">
        <div>
          <Search
            searchQuery={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={() => {
              console.log(searchQuery);
            }}
            onClear={() => {
              setSearchQuery("");
            }}
          />
        </div>
        <div>
          <ProfileInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;
