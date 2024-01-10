import React, { useEffect, useState } from 'react';
import WordCard from './WordCard';
import axios from 'axios';

function WordsContainer() {
  const [tenwords, setTenwords] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dongreji.github.io/words_api/wordList.json`);

      const wordList = [];
      for (let i = 0; i < 10; i++) {
        wordList.push(response.data.data[(Math.floor(Math.random() * 1000)) % 3001]);
      }
      setTenwords(wordList);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Random 10 words</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tenwords.map((word, index) => (
          <WordCard key={index} word={word} />
        ))}
      </div>
    </div>
  );
}

export default WordsContainer;
