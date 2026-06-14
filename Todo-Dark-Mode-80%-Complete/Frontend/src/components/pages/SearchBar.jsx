import React from "react";
import { Search } from "lucide-react";
import { FiX } from "react-icons/fi";

function SearchBar({ searchQuery, onSearch, onChange, onClear }) {
  return (
    <div>
      <div className="relative flex w-[300px] lg:w-[90%] items-center justify-center  mx-2 lg:mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-[5.5px] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ease-in-out"
          style={{
            backgroundColor: "var(--background-color)",
            color: "var(--text-color)",
          }}
          value={searchQuery}
          onChange={onChange}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <Search size={16} className="cursor-pointer" onClick={onSearch} />
          {searchQuery && (
            <FiX
              className="cursor-pointer hover:text-red-500"
              onClick={onClear}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
