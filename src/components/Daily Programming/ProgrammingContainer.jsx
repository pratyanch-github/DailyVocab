import React, { useState, useEffect } from 'react';
import ProgrammingHeader from './ProgrammingHeader';
import { Outlet } from 'react-router-dom';
import DataContext from '../../utils/DataContext';

function ProgrammingContainer() {
  // Write logic to call API and fetch data, store it in DataContext.
  let [data, setData] = useState({
    quesList: [
      { name: "ques1", desc: "i am ques 1", sol: "i am ques1's sol" },
      { name: "ques2", desc: "i am ques 2", sol: "i am ques2's sol" },
      { name: "ques3", desc: "i am ques 3", sol: "i am ques3's sol" },
      { name: "ques4", desc: "i am ques 4", sol: "i am ques4's sol" },
    ],
  });

  useEffect(() => {
    // Write the code to fetch the data from API and set data with setData.
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="bg-darkblue text-white min-h-screen">
        <ProgrammingHeader />
        <div className="container h-[100%] border-2 border-gray-300 mx-auto p-4">
          <Outlet />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default ProgrammingContainer;
