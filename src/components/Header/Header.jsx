import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-blue-500 p-4">
      <Link to="/">
        <ul className="flex items-center">
          <li>
            <h1 className="text-white text-3xl font-extrabold">
              Daily<span className="text-yellow-400">Vocab</span>
            </h1>
          </li>
        </ul>
      </Link>
      <p className="text-white mt-2 text-sm">
      </p>
    </div>
  );
}

export default Header;
