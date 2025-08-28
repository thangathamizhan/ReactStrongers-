import React, { useEffect, useState } from "react";
import dhoni from "../assets/images/dhoni.jpg";
import kohli from "../assets/images/kohli.jpg";
import pandya from "../assets/images/pandya.jpg";

const ImageLoader = () => {
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setLoader(true);
    const timerId = setInterval(() => {
      setCount((pre)=>pre+1)
          setLoader(false);

    },3000);

    return()=>clearInterval(timerId)
  }, []);

  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center min-h-screen ">
          <div
            className="w-20 h-20 border-8 border-dashed rounded-full animate-spin 
                      border-blue-500 border-t-pink-500 border-b-yellow-400 border-r-green-400"
          ></div>
        </div>
      ) : (
        <div className="flex gap-10 justify-center items-center bg-blue-600 w-fit h-fit p-4  rounded-full ">
          <img src={dhoni} alt="no img" className="w-50 h-50 rounded-full" />
          <img src={pandya} alt="no img" className="w-50 h-50 rounded-full" />
          <img src={kohli} alt="no img" className="w-50 h-50 rounded-full" />
        </div>
      )}
    </> 
  );
};

export default ImageLoader;
