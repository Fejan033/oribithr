import React from "react";
import { MdHome, MdSettings } from "react-icons/md";
import { FaTasks, FaRegPaperPlane } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-10 bg-[#2f7f67]">
      <div className="flex flex-col gap-4 justify-start items-center pt-4 flex-1">
        <div>
          <MdHome className="text-white w-6 h-6" />
        </div>
        <div>
          <FaTasks className="text-white w-6 h-6" />
        </div>
        <div>
          <FaRegPaperPlane className="text-white w-6 h-6" />
        </div>
      </div>
      
      <div className="py-4 self-center">
        <MdSettings className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

export default Sidebar;
