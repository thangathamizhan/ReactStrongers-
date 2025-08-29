import React, { useEffect, useState } from "react";

const UsersData = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");
  const [work, setWork] = useState("");
  const [blood, setBlood] = useState("");

  useEffect(() => {
    const getdata = async () => {
      try {
        const req = await fetch("https://dummyjson.com/users");
        const data = await req.json();
        setPersons(data.users);
      } catch (err) {
        console.log("something went wrong", err);
      }
    };

    getdata();
  }, []);

  const worklist = Array.from(
    new Set(persons.map((per) => per.company.title))
  ).filter(Boolean);
  const bloodGr = Array.from(
    new Set(persons.map((per) => per.bloodGroup))
  ).filter(Boolean);
  console.log("worklist", worklist);
  console.log("bloodGr", bloodGr);
    let filteredPersons =persons;
  if(search){
filteredPersons = filteredPersons.filter((person) =>
    person.firstName.toLowerCase().includes(search.toLowerCase())
  );
  } 
  if (work) {
    filteredPersons = filteredPersons.filter((person) => person.company.title === work);
  }
  if (blood) {
    filteredPersons = filteredPersons.filter((person) => person.bloodGroup === blood);
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Users Details Table
        </h1>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search by Name
              </label>
              <input
                type="text"
                id="search"
                placeholder="Enter name here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="work"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Filter by Work
              </label>
              <select
                id="work"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                value={work}
                onChange={(e) => {
                  setWork(e.target.value);
                }}
              >
                <option value="">Select work</option>
                {worklist.map((list) => (
                  <option value={list} key={list}>
                    {list}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="bloodGroup"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Filter by Blood Group
              </label>
              <select
                id="bloodGroup"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                value={blood}
                onChange={(e) => {
                  setBlood(e.target.value);
                }}
              >
                <option value="">Select blood group</option>
                {bloodGr.map((group) => (
                  <option value={group} key={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    S.No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    City
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Work
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Blood Group
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPersons.map((person, id) => (
                  <tr key={id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {id + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {person.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 capitalize">
                      {person.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {person.address.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {person.company.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                        {person.bloodGroup}
                      </span>
                    </td>
                  </tr>
                ))
               }
              </tbody>
            </table>
          </div>
        </div>
    
        
      </div>
      {persons.length==0&&
      <h2 className="text-lg text-red text-center text-gray-400 my-22">Loading user data...</h2>
      
      }
    </main>
  );
};

export default UsersData;
