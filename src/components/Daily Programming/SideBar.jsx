import React, { useContext } from 'react';
import DataContext from '../../utils/DataContext';
import { Link } from 'react-router-dom';

function SideBar() {
  let data = useContext(DataContext);

  return (
    <div className="bg-green-800 text-white p-4 rounded-md">
      {data.data.quesList.map((ques, index) => (
        <div key={index + 1} className="mb-4">
          <Link
            to={`../${index + 1}`}
            className=" hover:text-blue-950 transition duration-200 ease-in-out rounded"
          >
            <h1 className="text-xs font-semibold">{ques.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
