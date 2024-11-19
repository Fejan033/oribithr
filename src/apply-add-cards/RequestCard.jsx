import React from "react";
import { useNavigate } from "react-router-dom";

const RequestCard = () => {
  const navigate = useNavigate();

  const handleleave = () => {
    navigate("/apply-leave");
  };

  const handletask = () => {
    navigate("/add-task");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 text-center">
        Quick Actions
      </h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={handleleave}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition"
        >
          Apply Leave
        </button>
        <button
          onClick={handletask}
          className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-500 transition"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
