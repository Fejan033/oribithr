import React from 'react';
import tasks from '../apply-add-cards/tasks.json'

const TaskList = () => {
  
  return (
    <div className="p-3 bg-slate-200  rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 bg-gray-100 rounded-lg text-center">Task List</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 bg-gray-100 rounded-lg flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold text-gray-700">{task.title}</h3>
              <span className={`text-sm font-medium ${task.status === 'Completed' ? 'text-green-500' : task.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>
                {task.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
