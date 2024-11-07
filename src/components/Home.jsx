import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Home = () => {
  return (   
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 bg-[#f6f6f6] overflow-y-auto p-4 rounded-t-lg">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
