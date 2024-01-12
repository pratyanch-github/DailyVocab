import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../utils/DataContext';

function QuesSol() {
  // Getting the id of the current URL
  let { id } = useParams();
  const { data } = useContext(DataContext);
  const currentQuestion = data.quesList[id - 1]; // Adjusting index as it starts from 0

  return (
    <div className="bg-darkgreen text-white p-4 rounded-md border-2 border-gray-400">
      <h2 className="text-2xl font-bold mb-4">{currentQuestion.name}</h2>
      
      <div className="bg-gray-800 p-4 rounded-md mb-4">
        <h3 className="text-lg font-semibold">Solution:</h3>
        <p className="text-gray-300">{currentQuestion.soltxt}</p>
      </div>
      
      <div className="bg-gray-700 p-4 rounded-md mb-4">
        <h3 className="text-lg font-semibold">Pseudocode:</h3>
        <p className="text-gray-300">{currentQuestion.psuedoCode}</p>
      </div>
      
      {/* You can add more sections for other data if needed */}
    </div>
  );
}

export default QuesSol;
