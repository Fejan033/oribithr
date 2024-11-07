import React from "react";
import EmpProfile from "../dashboardcards/EmpProfile";
import TaskList from "../dashboardcards/Taskboard";
import Noticeboard from "../dashboardcards/Noticeboard";
import Wishboard from "../dashboardcards/Wishboard";
import LeaveManager from "../dashboardcards/LeaveManager";

const Dashboard = () => {
  return (
    <div className="flex flex-row gap-3 p-2 h-full overflow-y-auto ">
      {/* Left column with fixed width */}
      <div className="flex-1 flex-col w-96 gap-2 space-y-4">
        <EmpProfile />
        <TaskList  className="flex-1"/>
      </div>
      <div className="flex-1 flex-col gap-2">
        <Noticeboard />
        <Wishboard />
      </div>
      <div className="flex-1 flex-col gap-2">
        <LeaveManager/>
      </div>
    </div>
  );
};

export default Dashboard;
