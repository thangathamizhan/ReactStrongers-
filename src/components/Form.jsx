import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    passWord: "",
    phone: "",
  });
  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [submitError, setSubmitError] = useState("");
  const isValid = /^[A-Za-z\s]+$/;
  const ispassWord = /^.{8}$/;
  const isphone = /^\d{10}$/;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(errors).some((errormsg) => errormsg !== "") ||
      Object.values(formData).some((letter) => letter.trim() == "")
    ) {
      setSubmitError("Please fill out all fields correctly");
    } else {
      setSubmitError("");
      alert("Successfully submitted");
    }
    const convertedData = JSON.stringify(formData);
    localStorage.setItem("user", convertedData);
  };
  
  const handleForm = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    
    if (name === "Name") {
      if (!isValid.test(value.trim())) {
        setError({ ...errors, name: "Please enter letters only" });
      } else {
        setError({ ...errors, name: "" });
      }
    }
    if (name === "passWord") {
      if (!ispassWord.test(value.trim())) {
        setError({ ...errors, password: "Must be exactly 8 characters" });
      } else {
        setError({ ...errors, password: "" });
      }
    }
    if (name === "phone") {
      if (!isphone.test(value.trim())) {
        setError({ ...errors, phone: "Must be 10 digits only" });
      } else {
        setError({ ...errors, phone: "" });
      }
    }
    if (name === "email") {
      if (value.trim() === "") {
        setError({ ...errors, email: "Please fill out this field" });
      } else {
        setError({ ...errors, email: "" });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md border-0 p-8 gap-5 justify-center rounded-2xl bg-white shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Registration Form</h2>
        <p className="text-center text-gray-600 mb-6">Please fill in all fields</p>
        
        <div className="flex flex-col">
          <label htmlFor="myName" className="text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="Name"
            id="myName"
            placeholder="Enter your name"
            className="px-4 py-3 w-full bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            onChange={handleForm}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email ID</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            onChange={handleForm}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="passWord" className="text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="passWord"
            id="passWord"
            placeholder="Enter your password (8 characters)"
            className="px-4 py-3 w-full bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            onChange={handleForm}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="px-4 py-3 w-full bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            onChange={handleForm}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
        
        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full"
          >
            Submit
          </button>
        </div>
        
        <div>
          {submitError && (
            <p className="text-red-600 text-center bg-red-50 py-2 px-4 rounded-lg border border-red-200">
              {submitError}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;