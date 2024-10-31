import React from "react";
import logo from "../resources/logo.png"; 

const Navbar = () => {
  return (
    <div className="flex">
      <div className="flex justify-between items-center w-full h-14 bg-[#02563D] p-4"> 
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center overflow-hidden"> 
            <img 
              src={logo} 
              alt="logo" 
              className="h-full w-full object-cover" 
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-white">Home</div>
          <input 
            type="text" 
            placeholder="Search" 
            className="border border-gray-300 rounded-md p-2" 
          />
        </div>
    
        <div className="rounded-full bg-gray-400 h-12 w-12 flex items-center justify-center"> 
          <span className="text-white">P</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
