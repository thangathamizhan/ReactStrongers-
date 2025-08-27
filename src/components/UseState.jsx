import React, { useState } from 'react'

const UseState = () => {
  const [Count, setCount] = useState(1);

  return (
    <main className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white p-4">
      <div className="max-w-md w-full bg-gray-800/40 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700 p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
          useState Hook Example
        </h1>
        
        <div className="text-6xl font-extrabold my-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
          {Count}
        </div>
        
        <button
          onClick={() => setCount(pre => pre * 2)}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Double Up
        </button>
        
        <p className="mt-6 text-gray-300 text-center">
          Click the button to double the current value using React's useState hook
        </p>
      </div>
    </main>
  )
}

export default UseState