import React, { useState } from "react";

const Leavecard = () => {
  const [leaveType, setLeaveType] = useState("PL");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");

  const handleApplyLeave = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex p-3 justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-x-6">
        
       
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Leave Balance
          </h2>
          <div className="mb-8">
            <div className="bg-slate-100 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-blue-600">
                Privilege Leave (PL):
              </h3>
              <p className="text-gray-700">5.5 Days</p>
            </div>
            <div className="bg-slate-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-600">
                Casual Leave (CL):
              </h3>
              <p className="text-gray-700">3 Days</p>
            </div>
          </div>
        </div>

        
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Apply for Leave
          </h2>
          <form onSubmit={handleApplyLeave} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">From Date</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">To Date</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Type of Leave</label>
              <select
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg"
              >
                <option value="PL">Privilege Leave (PL)</option>
                <option value="CL">Casual Leave (CL)</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Reason</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg resize-none"
                rows="3"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500"
            >
              Apply Leave
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Leavecard;
