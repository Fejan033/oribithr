import React from "react";
import { useNavigate } from "react-router-dom";

const LeaveManager = () => {
  const navigate = useNavigate();

  const applyLeave = () => {
    navigate("/apply-leave");
  };

  return (
    <div className="flex flex-col bg-slate-200 rounded-lg p-3 space-y-4 items-center justify-center">
      <h2 className="text-2xl font-semibold text-gray-700 bg-gray-100 rounded-lg p-4 text-center w-full">
        Leave Manager
      </h2>

      <div className="bg-slate-50 rounded-lg p-3 w-full">
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
      <div className="bg-green-100 hover:bg-green-500 text-gray-700 font-bold p-2 text-center rounded-xl w-32">
        <button onClick={applyLeave}>
          <strong>Apply Leave</strong>
        </button>
      </div>
    </div>
  );
};

export default LeaveManager;
