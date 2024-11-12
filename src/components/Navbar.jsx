import React, { useState } from "react";
import logo from "../resources/logo.png";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import profile from "../resources/profile.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const searchItem = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchText);
    setSearchText("");
  };

  const navigate = useNavigate();

  const ToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-16 bg-[#0077B5] flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 flex items-center justify-center overflow-hidden">
          <img
            src={logo}
            alt="logo"
            className="h-full w-full object-cover cursor-pointer"
            title="Oribit HR"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 ml-4">Orbit HR</h2>
      </div>

      {/* Include Introduction here in this section */}

      <div className="flex items-center space-x-4 w-full max-w-md">
        <MdHome onClick={ToHome} className="text-white w-8 h-8 cursor-pointer" title="Home" />

        <div className="flex items-center w-full bg-[#f6f6f6] rounded-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 px-4 bg-transparent rounded-xl focus:outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={searchItem}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="rounded-full h-12 w-12 flex items-center justify-center overflow-hidden">
        <img src={profile} alt="logo" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Navbar;
