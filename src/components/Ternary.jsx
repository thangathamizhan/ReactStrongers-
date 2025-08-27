import React, { useState } from "react";

const Ternary = () => {
  const [light, setlight] = useState(false);
  
  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white p-4">
      <div className="max-w-md w-full bg-gray-800/40 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700 p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 text-center">
          Ternary Operator Example
        </h1>
        
        <p className="text-lg text-gray-300 mb-6 text-center">
          Click the button to toggle the light {light ? "off" : "on"}
        </p>
        
        <div className={`relative mb-8 transition-all duration-500 ${light ? 'scale-110' : 'scale-100'}`}>
          <div className={`absolute -inset-4 rounded-full blur-xl transition-all duration-500 ${
            light ? 'bg-yellow-400/30 opacity-100' : 'bg-gray-400/10 opacity-0'
          }`}></div>
          
          <div className={`w-40 h-40 rounded-full flex items-center justify-center font-bold text-xl relative transition-all duration-500 ${
            light 
              ? 'bg-yellow-300 text-yellow-900 shadow-2xl shadow-yellow-400/50' 
              : 'bg-gray-800 text-gray-400 shadow-inner'
          }`}>
            {light ? "ON" : "OFF"}
          </div>
          
          {light && (
            <>
              <div className="absolute -inset-8 border-4 border-yellow-300/30 rounded-full animate-ping"></div>
              <div className="absolute -inset-12 border-4 border-yellow-200/20 rounded-full animate-pulse"></div>
            </>
          )}
        </div>
        
        <button
          className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
            light 
              ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 hover:shadow-gray-800/30' 
              : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:shadow-yellow-500/40'
          }`}
          onClick={() => {
            setlight(!light);
          }}
        >
          {light ? "Turn Off" : "Turn On"}
        </button>
      </div>
    </main>
  );
};

export default Ternary;