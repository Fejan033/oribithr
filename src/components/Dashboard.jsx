import React from "react";
import EmpProfile from "../dashboardcards/EmpProfile";
import TaskList from "../dashboardcards/Taskboard";
import Noticeboard from "../dashboardcards/Noticeboard";
import Wishboard from "../dashboardcards/Wishboard";

const Dashboard = () => {
  return (
    <div className="flex flex-row gap-2 p-2">
      {/* Left column with fixed width */}
      <div className="flex flex-col w-86 gap-2">
        <EmpProfile />
        <TaskList />
      </div>

      
      <div className="flex flex-col gap-2">
        <Noticeboard />
        <Wishboard/>
      </div>
    </div>
  );
};

export default Dashboard;
