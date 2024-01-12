import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../utils/DataContext';

function AllQuesList() {
  let { data } = useContext(DataContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 border border-gray-700 p-4 rounded-md">
      {data.quesList.map((ques, index) => (
        <div key={index + 1} className="bg-green-500 p-4 rounded-md shadow-md">
          <Link to={`../${index + 1}`} className="hover:text-gray-300">
            <h1 className="text-lg font-bold">{ques.name}</h1>
          </Link>
          <div className="flex flex-wrap gap-2 mt-2">
            {ques.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-gray-700 text-white px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllQuesList;
