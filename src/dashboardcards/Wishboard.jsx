import React from "react";

const Wishboard = () => {
  const employeeWishes = [
    {
      id: 1,
      name: "Alice Johnson",
      wish: "Congratulations on your promotion!",
      date: "November 1, 2024",
    },
    {
      id: 2,
      name: "Bob Smith",
      wish: "Happy Birthday to you!",
      date: "November 2, 2024",
    },
    {
      id: 3,
      name: "Catherine Lee",
      wish: "Welcome aboard!",
      date: "November 3, 2024",
    },
    {
      id: 4,
      name: "David Brown",
      wish: "Happy Work Anniversary!",
      date: "November 4, 2024",
    },
    {
      id: 5,
      name: "Eva White",
      wish: "Best wishes on your new project!",
      date: "November 5, 2024",
    },
    {
      id: 6,
      name: "Frank Green",
      wish: "Thank you for your hard work!",
      date: "November 6, 2024",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1 bg-gray-200 rounded-lg text-center">
        Special Messages
      </h2>
      <div className="p-3 bg-white rounded-xl mb-4 shadow-md w-96 h-72 overflow-y-auto">
        <ul className="space-y-2 h-36 ">
          {employeeWishes.map((employee) => (
            <li key={employee.id} className="p-3 bg-blue-100 rounded-lg">
              <div className="text-sm">
                <span className="text-blue-800 font-semibold">
                  {employee.name}
                </span>
                :<span className="text-gray-700"> {employee.wish}</span>
              </div>
              <div className="font-bold text-xs text-gray-500 mt-1">
                {employee.date}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wishboard;
