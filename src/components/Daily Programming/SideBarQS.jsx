import React from 'react';
import SideBar from './SideBar';
import QuesSol from './QuesSol';

function SideBarQS() {
  return (
    <div className="bg-darkblue text-white p-4 rounded-md flex border-2 border-gray-700 gap-4">
      <SideBar />
      <QuesSol />
    </div>
  );
}

export default SideBarQS;
