import React, { useState, useEffect } from 'react';
import ProgrammingHeader from './ProgrammingHeader';
import { Outlet } from 'react-router-dom';
import DataContext from '../../utils/DataContext';

function ProgrammingContainer() {
  // Write logic to call API and fetch data, store it in DataContext.
  let [data, setData] = useState({
    quesList: [
      { 
        name: "Two Sum", 
        desc: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
        soltxt: "function twoSum(nums, target) {\n  // Implementation code here\n}", 
        psuedoCode: "// Pseudo code here",
        tags: ["array", "hash table"],
        qid: "001",
      },
      { 
        name: "Reverse Integer", 
        desc: "Given a 32-bit signed integer, reverse digits of an integer.",
        soltxt: "function reverseInteger(x) {\n  // Implementation code here\n}", 
        psuedoCode: "// Pseudo code here",
        tags: ["math"],
        qid: "002",
      },
      { 
        name: "Palindrome", 
        desc: "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.",
        soltxt: "function isPalindrome(x) {\n  // Implementation code here\n}", 
        psuedoCode: "// Pseudo code here",
        tags: ["math"],
        qid: "003",
      },
      { 
        name: "Valid Parentheses", 
        desc: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        soltxt: "function isValid(s) {\n  // Implementation code here\n}", 
        psuedoCode: "// Pseudo code here",
        tags: ["stack"],
        qid: "004",
      },
    ],
  });

  useEffect(() => {
    // Simulating API call and setting data after a delay (mocking asynchronous behavior)
    const fetchData = async () => {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Set data
      setData({
        ...data,
        quesList: [...data.quesList],
      });
    };

    fetchData();
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
