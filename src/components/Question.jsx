import React, { useState } from "react";

const Question = () => {
  const [question1, setQuestion1] = useState([
    { Spoint: "State is the hook that allow as to use statefull function " },
    { Spoint: "state is mutable we can change its value " },
    {
      Spoint:
        "changing state trigger screen rendering so whenever the change happens the screen will re render",
    },
    {
      Spoint:
        "State is inbuilt react object that allow us to store dynamic data",
    },
    {
      point:
        "Props (short for properties) are used to pass data from parent to child components.",
    },
    { point: "Props are immutable; child components cannot modify them." },
    { point: "They help make components reusable by passing different data." },
    {
      point:
        "Props are read-only and primarily used for configuration and rendering data.",
    },
  ]);
  
  const [stateQuesOn, setStateQuesOn] = useState(false);
  const [propsQuesOn, setPropsQuesOn] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          React Concepts: State vs Props
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* State Question */}
          <div className="bg-gray-700/50 rounded-xl p-5 border border-gray-600 transition-all duration-300 hover:border-cyan-400/30">
            <h2 className="text-xl font-semibold mb-4 text-cyan-300">Question: What is state?</h2>
            
            {loader1 ? (
              <div className="flex justify-center items-center py-8">
                <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 mb-4 ${
                    stateQuesOn 
                      ? "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300" 
                      : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  }`}
                  onClick={() => {
                    setLoader1(true);
                    setTimeout(() => {
                      setStateQuesOn(!stateQuesOn);
                      setLoader1(false);
                    }, 1000);
                  }}
                >
                  {stateQuesOn ? "Hide Answer" : "Show Answer"}
                </button>

                {stateQuesOn && (
                  <div className="space-y-3 mt-4">
                    {question1.filter(item => item.Spoint).map((data, i) => (
                      <div key={i} className="bg-gray-800/60 p-3 rounded-lg border-l-4 border-cyan-500">
                        <p className="text-gray-300">{data.Spoint}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Props Question */}
          <div className="bg-gray-700/50 rounded-xl p-5 border border-gray-600 transition-all duration-300 hover:border-cyan-400/30">
            <h2 className="text-xl font-semibold mb-4 text-cyan-300">Question: What is props?</h2>
            
            {loader2 ? (
              <div className="flex justify-center items-center py-8">
                <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <button 
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 mb-4 ${
                    propsQuesOn 
                      ? "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300" 
                      : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  }`}
                  onClick={() => {
                    setLoader2(true);
                    setTimeout(() => {
                      setPropsQuesOn(!propsQuesOn);
                      setLoader2(false);
                    }, 1000);
                  }}
                >
                  {propsQuesOn ? "Hide Answer" : "Show Answer"}
                </button>

                {propsQuesOn && (
                  <div className="space-y-3 mt-4">
                    {question1.filter(item => item.point).map((data, i) => (
                      <div key={i} className="bg-gray-800/60 p-3 rounded-lg border-l-4 border-cyan-500">
                        <p className="text-gray-300">{data.point}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Click the buttons to reveal the answers about React state and props</p>
        </div>
      </div>
    </main>
  );
};

export default Question;