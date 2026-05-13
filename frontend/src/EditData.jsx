import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function EditData() {
  const [studentId, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const params = useParams();

  const navigate = useNavigate();
const url = `http://localhost:3000/students/${params.id}`;

  useEffect(() => {
    getDataByIdInTextBox();
  }, []);

  const getDataByIdInTextBox = async () => {
    let response = await fetch(url);
    response = await response.json();
    setId(response.studentId);
    setName(response.name);
    setEmail(response.email);
    setCity(response.city);
  };

    const updateData = async (e)=>{
      e.preventDefault();
      let response = await fetch (url,{
        method: "PUT",
        body:JSON.stringify({studentId,name,email,city}),
      });
      response = await response.json();
      if(response){
        alert("Data Update Successfully....")
        navigate("/")
      }
    }
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
            value={studentId}
            placeholder="enter your id "
            onChange={(e) => setId(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            Name
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            value={name}
            placeholder="enter your name "
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            Email
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="email"
            value={email}
            placeholder="enter your email "
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            City
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            value={city}
            placeholder="enter your city "
            onChange={(e) => setCity(e.target.value)}
          />

          <button 
          onClick={updateData}
          className="bg-sky-500 p-1 rounded-lg text-white hover:bg-sky-700">
            Update Data
          </button>
        </form>
      </div>
    </>
  );
}

export default EditData;
