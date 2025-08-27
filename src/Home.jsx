import React from 'react'
import React_image from './assets/images/React_image.png'

const Home = () => {
  return (
    <main className="min-h-screen min-w-screen flex flex-col gap-8 justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white p-4">
      <div className="max-w-4xl w-full bg-gray-800/40 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700 p-8 md:p-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center">
          React Learning Journey
        </h1>
        <p className="text-xl text-blue-100 mb-8 text-center max-w-2xl">
          Discover the most important concepts that make React powerful for building modern web applications
        </p>
        
        <div className="relative mb-8">
          <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <img 
            src={React_image} 
            alt="React logo" 
            className="w-48 h-48 rounded-full shadow-lg border-4 border-cyan-400/30 relative z-10" 
          />
        </div>
        
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg">
          Start Learning Now
        </button>
      </div>
    </main>
  )
}

export default Home