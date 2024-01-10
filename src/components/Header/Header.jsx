import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-blue-500 p-4">
      <Link to="/">
        <ul className="flex items-center">
          <li>
            <h1 className="text-white text-2xl font-bold">Daily Challenge</h1>
          </li>
        </ul>
      </Link>
    </div>
  );
}

export default Header;
