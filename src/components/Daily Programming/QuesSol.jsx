import React from 'react';
import { useParams } from 'react-router-dom';

function QuesSol() {
  // Getting the id of the current URL
  let { id } = useParams();

  return (
    <div className="bg-darkgreen flex-grow-1 text-white p-4 rounded-md border-2 border-gray-400">
      <h2>Question Solution</h2>
      {id && <h2>I am ques {id}.</h2>}
    </div>
  );
}

export default QuesSol;
