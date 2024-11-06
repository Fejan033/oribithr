import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';


const Home = () => {
  return (   
    <div className='h-screen w-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex-1 bg-[#f6f6f6]'>
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default Home;
