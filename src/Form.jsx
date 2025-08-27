import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    passWord: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleForm =(e)=>{
       const {name,value}=e.target;
       
     setFormData({...formData,[name]:value})
     console.log("this is formdata",formData);
     
  }
  
  

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/4 border-2 p-4 m-5 gap-3 justify-center rounded-xl bg-gray-500 px-5 text-white"
    >
      <div className="flex flex-col">
        <label htmlFor="myName"> Name</label>
        <input
          type="text"
          name="Name"
          id="myName"
          placeholder="Enter your name"
          className="px-2 py-1 w-3/4 bg-amber-200 text-black rounded"
          onChange={handleForm}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email id</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="px-2 py-1 w-3/4  bg-amber-200 text-black rounded"
          onChange={handleForm}

        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="passWord">Password</label>
        <input
          type="text"
          name="passWord"
          id="passWord"
          placeholder="Enter your password"
          className="px-2 py-1 w-3/4  bg-amber-200 text-black rounded"
          onChange={handleForm}

        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">phone no.</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          className="px-2 py-1 w-3/4  bg-amber-200 text-black rounded"
          onChange={handleForm}

        />
      </div>
      <div className="flex justify-center mx ">
        <button
          type="submit"
          className=" bg-blue-600 w-25 py-1 px-2 rounded-lg font-bold text-lg "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
