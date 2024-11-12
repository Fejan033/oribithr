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
    {
      id: 5,
      notice: "CEO's Monthly Address at 10 AM",
      date: "November 12, 2024",
    },
    {
      id: 6,
      notice: "System Downtime for IT Maintenance",
      date: "November 13, 2024",
    },
    {
      id: 7,
      notice: "New Company Policy on Remote Work",
      date: "November 14, 2024",
    },
    {
      id: 8,
      notice: "HR Workshop: Workplace Wellness",
      date: "November 15, 2024",
    },
    {
      id: 9,
      notice: "Finance Team Budget Submission Reminder",
      date: "November 16, 2024",
    },
    {
      id: 10,
      notice: "Admin Notice: Office Closed on November 20",
      date: "November 17, 2024",
    },
    {
      id: 11,
      notice: "New IT Security Protocols for All Staff",
      date: "November 18, 2024",
    },
    {
      id: 12,
      notice: "Upcoming Training on Data Privacy Compliance",
      date: "November 19, 2024",
    },
    {
      id: 13,
      notice: "Holiday Party Announcement",
      date: "November 21, 2024",
    },
    {
      id: 14,
      notice: "Deadline for Year-End Performance Reviews",
      date: "November 22, 2024",
    },
    {
      id: 15,
      notice: "HR Update: Benefits Open Enrollment",
      date: "November 23, 2024",
    },
    {
      id: 16,
      notice: "Admin Alert: New Parking Regulations",
      date: "November 24, 2024",
    },
    {
      id: 17,
      notice: "System Upgrade Scheduled by IT Team",
      date: "November 25, 2024",
    },
    {
      id: 18,
      notice: "Annual Employee Survey Released",
      date: "November 26, 2024",
    },
    {
      id: 19,
      notice: "CEO's Town Hall Meeting at 4 PM",
      date: "November 27, 2024",
    },
    {
      id: 20,
      notice: "Safety Training Session by HR",
      date: "November 28, 2024",
    },
  ];

  return (
    <div className="bg-slate-200  rounded-xl p-3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 rounded-lg text-left">
        What's New
      </h2>
      <div className="p-3 bg-white rounded-xl shadow-md h-[75vh] overflow-y-auto">
        <ul className="space-y-4">
          {[...notices].reverse().map((notice) => (
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
