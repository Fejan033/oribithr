import React from "react";

const Noticeboard = () => {
  const notices = [
    {
      id: 1,
      notice: "Scheduled Maintenance on HR Portal",
      date: "November 5, 2024",
    },
    {
      id: 2,
      notice: "Team Meeting at 3 PM",
      date: "November 6, 2024",
    },
    {
      id: 3,
      notice: "New Features Added to Employee Dashboard",
      date: "November 7, 2024",
    },
    {
      id: 4,
      notice: "Deadline for Project Submissions",
      date: "November 10, 2024",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 rounded-lg text-left">
      What's New
      </h2>
      <div className="p-3 bg-white rounded-xl shadow-md h-56 overflow-y-scroll">
        <ul className="space-y-4">
          {notices.map((notice) => (
            <li key={notice.id} className="p-3 rounded-lg">
              <div className="text-sm font-medium text-slate-500">
                {notice.notice}
              </div>
              <div className="font-bold text-xs text-gray-600 mt-1">
                {notice.date}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Noticeboard;
