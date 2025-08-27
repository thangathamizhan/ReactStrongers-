import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-blue-600 flex flex-wrap justify-center gap-4 md:gap-8 px-4 py-3 shadow-lg">
      <Link 
        to='/' 
        className="text-white text-lg font-semibold hover:bg-white/20 transition-all duration-300 rounded-lg px-4 py-2 hover:scale-105"
      >
        Home
      </Link>
      <Link 
        to='Usestate' 
        className="text-white text-lg font-semibold hover:bg-white/20 transition-all duration-300 rounded-lg px-4 py-2 hover:scale-105"
      >
        UseState
      </Link>
      <Link 
        to='ternary' 
        className="text-white text-lg font-semibold hover:bg-white/20 transition-all duration-300 rounded-lg px-4 py-2 hover:scale-105"
      >
        Ternary
      </Link>
      <Link 
        to='Questions' 
        className="text-white text-lg font-semibold hover:bg-white/20 transition-all duration-300 rounded-lg px-4 py-2 hover:scale-105"
      >
        Questions
      </Link>
    </nav>
  );
};

export default NavBar;