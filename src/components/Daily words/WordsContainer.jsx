import React, { useEffect, useState } from 'react';
import WordCard from './WordCard';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

function WordsContainer() {
  const [tenwords, setTenwords] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dongreji.github.io/words_api/wordList.json`);

      const wordList = [];
      for (let i = 0; i < 10; i++) {
        wordList.push(response.data.data[(Math.floor(Math.random() * 1000)) % 3001]);
      }
      setTenwords(wordList);
      setLoading(false);
    } catch (err) {
      console.log('Error:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-extrabold mb-4 text-yellow-400">
        🌟 Embark on a Word Journey: Random 10 Words
      </h2>
      <p className="text-gray-300">
        Explore a curated list of diverse words to enrich your vocabulary. Refresh for a new set of intriguing words! 🔃
      </p>
      <br />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Shimmer effect for loading state */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="bg-blue-500 p-4 rounded-md mb-4">
              <Skeleton height={120} />
              <div className="mt-4">
                <Skeleton count={2} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tenwords.map((word, index) => (
            <WordCard key={index} word={word} />
          ))}
        </div>
      )}

      <div className="bg-blue-500 p-4 mt-8 rounded-md">
        <p className="text-white text-lg font-bold mb-2">Important Note</p>
        <p className="text-white">
          🚀 Elevate your language skills by learning 10 words daily. Refresh for new words and make it a delightful habit! 🔃
        </p>

        {/* Additional creative elements */}
        <div className="mt-4">
          <p className="text-yellow-400 font-semibold">🎉 Boost your linguistic flair!</p>
          <p className="text-green-400 font-semibold">📚 Discover the allure of language!</p>
        </div>
      </div>
    </div>
  );
}

export default WordsContainer;
