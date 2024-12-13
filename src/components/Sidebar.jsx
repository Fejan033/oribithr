import React from "react";
import { MdHome, MdSettings } from "react-icons/md";
import { FaTasks, FaRegPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  const ToHome = () => {
    navigate("/");
  };

  const ToRequest = () => {
    navigate("/to-request")
  }


  return (
    <div className="flex flex-col h-full w-12 bg-[#66C5E9]">
      <div className="flex flex-col gap-4 justify-start items-center pt-4 flex-1">
        <div>
          <MdHome onClick={ToHome} className="text-white w-6 h-6  hover:text-gray-950 cursor-pointer text-2xl"  title="Home"/>
        </div>
        <div>
          <FaTasks className="text-white w-6 h-6 hover:text-gray-950  cursor-pointer text-2xl"  title="HR Handbook"/> 
        </div>
        <div>
          <FaRegPaperPlane onClick={ToRequest} className="text-white w-6 h-6  hover:text-gray-950 cursor-pointer text-2xl"   title="Requests"/>
        </div>
      </div>
      
      <div className="py-4 self-center">
        <MdSettings className="text-white w-6 h-6 hover:text-gray-950 cursor-pointer text-2xl" title="Setting"/>
      </div>
    </div>
  );
};

export default Sidebar;
