import React from 'react';

const LeaveManager = () => {
  return (
    <div className="flex flex-col bg-slate-200 rounded-lg  p-6 space-y-4 shadow-md">
      <h2 className="text-xl font-bold text-gray-700 bg-gray-100 rounded-lg p-4 text-center">
        Leave Manager
      </h2>
      
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-600">Available Leave</h3>
        
        <div className="mt-3">
          <p className="text-gray-700">
            <span className="font-semibold text-blue-600">Privilege Leave</span> - 5.5
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-green-600">Casual Leave</span> - 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaveManager;
