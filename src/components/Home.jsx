import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leavecard from "../apply-add-cards/LeaveCard";
import RequestCard from "../apply-add-cards/RequestCard";
import TaskCard from "../apply-add-cards/TaskCard";

const Home = () => {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 bg-[#f6f6f6] overflow-y-auto p-4 rounded-t-lg">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/apply-leave" element={<Leavecard />} />
              <Route path="/to-request"  element={<RequestCard/>} />
              <Route path="/add-task"  element={<TaskCard/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Home;
