import React from "react";
import { useState } from "react";
function AddNewData() {
  const [studentId, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const AddStudent = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/students";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ studentId, name, email, city }),
    });
    response = await response.json();
    if (response) {
      alert("data added !");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <form className="flex flex-col gap-3 border border-gray-400  px-4 py-3 shadow-xl rounded  bg-white w-72">
          <label className="text-sky-500 text-lg font-serif font-semibold">
            ID
          </label>

          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="Id"
            onChange={(e) => setId(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            Name
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            Email
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            City
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            onClick={AddStudent}
            className="bg-orange-500 p-1 rounded-lg text-white hover:bg-sky-700"
          >
            Add New Data
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNewData;
