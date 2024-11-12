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
      <div className="flex-1 flex-col w-96 gap-2 space-y-3">
        <EmpProfile />
        <TaskList  className="flex-1"/>
      </div>
      <div className="flex-1 flex-col gap-2 space-y-3">
        <Noticeboard />
      </div>
      <div className="flex-1 flex-col gap-2 space-y-3">
        <LeaveManager/>
        <Wishboard />
      </div>
    </div>
  );
};

export default Dashboard;
