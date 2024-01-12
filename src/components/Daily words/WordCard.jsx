import React from 'react';
import { Link } from 'react-router-dom';

function ProgrammingHeader() {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/dailyQS" className="text-white text-lg hover:text-yellow-300">
            Daily
          </Link>
          <Link to="/all" className="text-white text-lg hover:text-yellow-300">
            All
          </Link>
        </div>
        <div>
          <Link to="/" className="text-white text-2xl font-extrabold">
            Daily<span className="text-yellow-400">Vocab</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProgrammingHeader;
