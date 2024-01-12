import React, { useEffect, useState } from "react";
import axios from "axios";

function WordCard({ word }) {
  const [wordData, setWordData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Fetching meaning
  const fetchMeaning = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
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

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md cursor-pointer text-white overflow-auto max-h-96">
      <div className="WordName flex flex-row items-center justify-between">
        <h3 className="self-start text-3xl font-bold mb-2">{word}</h3>     
         {wordData?.phonetics[0]?.audio && (<div className="flex self-end absolute relative">
              <button
                className="text-blue-400"
                onClick={() => playAudio(wordData?.phonetics[0]?.audio)}
              >
                🔉
              </button>
          </div> )  }
      </div>

      {showDetails && wordData ? (
        <>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Meanings:</h4>
            {wordData.meanings.map((meaning, index) => (
              <div key={index} className="mb-4">
                <p className="text-blue-400 font-semibold">
                  {meaning.partOfSpeech}
                </p>
                {meaning.definitions.map((definition, subIndex) => (
                  <div key={subIndex} className="ml-4">
                    <p className="text-gray-400">
                      <span className="font-semibold">Definition:</span>{" "}
                      {definition.definition}
                    </p>
                    <div className="mt-2">
                      <p className="text-gray-400">
                        <span className="font-semibold">Example:</span>{" "}
                        {definition.example}
                      </p>
                    </div>
                    {/* Modern-looking line (partition) */}
                    {subIndex < 2 && (
                      <div className="border-t border-gray-600 mt-2" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <button
          className="text-gray-400 bg-gray-800 rounded-md p-2 mt-2 hover:bg-gray-700 transition duration-300"
          onClick={toggleDetails}
        >
          Click for meaning🔻
        </button>
      )}
    </div>
  );
}

export default WordCard;
