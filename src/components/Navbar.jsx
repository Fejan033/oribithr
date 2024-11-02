import React, { useState } from "react";
import logo from "../resources/logo.png";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [searchText, setSearchText] = useState(""); 

  const searchItem = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchText);
    setSearchText(""); 
  };

  return (
    <div className="w-full h-16 bg-[#02563D] flex items-center justify-between px-4">
      
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 flex items-center justify-center overflow-hidden">
          <img src={logo} alt="logo" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Include Introduction here in this section */}

      <div className="flex items-center space-x-4 w-full max-w-md">
        <MdHome className="text-white w-8 h-8" />

        <div className="flex items-center w-full bg-[#f6f6f6] rounded-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 px-4 bg-transparent rounded-xl focus:outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchItem} className="p-2 text-gray-600 hover:text-gray-800">
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

     
      <div className="rounded-full bg-gray-400 h-12 w-12 flex items-center justify-center">
        <span className="text-white">P</span>
      </div>
    </div>
  );
};

export default Navbar;
