import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-blue-500 p-4">
      <Link to="/">
        <ul className="flex items-center gap-6">
          <li>
            <h1 className="text-white text-3xl font-extrabold">
              Daily<span className="text-yellow-400">Vocab</span>
            </h1>
          </li>
          
          <li>
            <Link to="/dsa">
              <h1 className="text-white text-3xl font-extrabold">
                Daily<span className="text-yellow-400">DSA</span>
              </h1>
            </Link>
          </li>
        </ul>
      </Link>
      <p className="text-white mt-2 text-sm">
      </p>
    </div>
  );
}

export default Header;
