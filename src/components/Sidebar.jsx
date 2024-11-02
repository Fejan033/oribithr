import React from "react";
import { MdHome, MdSettings } from "react-icons/md";
import { FaTasks, FaRegPaperPlane } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-12 bg-[#2f7f67]">
      <div className="flex flex-col gap-4 justify-start items-center pt-4 flex-1">
        <div>
          <MdHome className="text-white w-6 h-6  hover:text-gray-950 cursor-pointer text-2xl"  title="Home"/>
        </div>
        <div>
          <FaTasks className="text-white w-6 h-6 hover:text-gray-950  cursor-pointer text-2xl"  title="Tasks"/> 
        </div>
        <div>
          <FaRegPaperPlane className="text-white w-6 h-6  hover:text-gray-950 cursor-pointer text-2xl"   title="Requests"/>
        </div>
      </div>
      
      <div className="py-4 self-center">
        <MdSettings className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

export default Sidebar;
