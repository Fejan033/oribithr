import React from "react";
import tasks from "../apply-add-cards/tasks.json";

const TaskCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto space-y-6">
      <div className="bg-[#66C5E9] p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Add New Task
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="taskDescription"
              className="block text-white font-medium mb-1"
            >
              Task Description
            </label>
            <textarea
              id="taskDescription"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077B5]"
              placeholder="Describe your task..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#0077B5] text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </form>
      </div>

      <div className="bg-[#0077B5] p-6 rounded-lg text-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Task List</h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 bg-white rounded-lg shadow-md flex flex-col"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h3>
                <span
                  className={`text-sm font-medium ${
                    task.status === "Completed"
                      ? "text-green-500"
                      : task.status === "In Progress"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {task.status}
                </span>
              </div>
              <p className="text-gray-600">{task.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskCard;
