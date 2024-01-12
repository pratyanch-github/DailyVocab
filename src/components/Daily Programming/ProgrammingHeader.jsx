import React from 'react';
import { Link } from 'react-router-dom';

function ProgrammingHeader() {
  return (
    <div className="bg-darkblue text-white p-4 rounded-md">
      <div className="flex mt-2">
        <Link to="dailyQS" className="text-blue-400 mr-4 hover:text-blue-200">
          Daily
        </Link>

        <Link to="all" className="text-blue-400 hover:text-blue-200">
          All
        </Link>
      </div>
    </div>
  );
}

export default ProgrammingHeader;
