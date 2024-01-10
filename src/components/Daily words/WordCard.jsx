import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WordCard({ word }) {
  const [wordData, setWordData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Fetching meaning
  const fetchMeaning = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setWordData(response.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMeaning();
  }, [word]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md cursor-pointer" onClick={toggleDetails}>
      <h3 className="text-2xl font-bold mb-2">{word}</h3>
      {showDetails && wordData ? (
        <>
          <p className="text-gray-700">Phonetic: {wordData.phonetic}</p>
          {wordData.phonetics && (
            <>
              <p className="text-gray-700">Audio: {wordData.phonetics[0]?.audio}</p>
            </>
          )}
          <p className="text-gray-700">Origin: {wordData.origin}</p>
          <h4 className="text-lg font-semibold mt-4">Meanings:</h4>
          {wordData.meanings.map((meaning, index) => (
            <div key={index} className="mb-4">
              <p className="text-blue-500">{meaning.partOfSpeech}</p>
              {meaning.definitions.map((definition, subIndex) => (
                <div key={subIndex} className="ml-4">
                  <p className="text-gray-700">Definition: {definition.definition}</p>
                  {subIndex < 2 && <p className="text-gray-700">Example: {definition.example}</p>}
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <p className="text-gray-700">Click to show details</p>
      )}
    </div>
  );
}

export default WordCard;
