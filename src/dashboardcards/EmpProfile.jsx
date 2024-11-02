import React from 'react';
import profile from '../resources/profile.png';

const EmpProfile = () => {
  return (
    <div className="p-8 bg-gray-50 shadow-md rounded-xl w-80">
      <div className="flex flex-row items-center space-x-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src={profile} alt="profile" className="h-full w-full object-cover" />
        </div>
        <div className="text-xl font-bold text-gray-700">
          Mohammed Fejan
        </div>
      </div>
      <div className="flex flex-col items-start mt-4 space-y-1 text-gray-600">
        <div className="font-semibold">Full Stack Developer</div>
        <div className="font-semibold">Team Dev-5</div>
      </div>
    </div>
  );
}

export default EmpProfile;
