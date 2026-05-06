import React from "react";
import { useState } from "react";
function AddNewData() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const AddStudent = (e) => {
    console.log(id, name, email, city);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <form className="flex flex-col gap-3 border border-gray-400  px-4 py-3 shadow-xl rounded  bg-white w-72">
          <label>ID</label>

          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="enter your id "
            onChange={(e) => setId(e.target.value)}
          />

          <label>Name</label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="enter your name "
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="enter your email "
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>City</label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="enter your city "
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            onClick={AddStudent}
            className="bg-sky-500 p-1 rounded-lg text-white"
          >
            Add New Data
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNewData;
