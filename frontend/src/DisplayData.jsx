import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DisplayData() {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    renderData();
  }, []);

  async function renderData() {
    const url = "http://localhost:3000/students";

    let response = await fetch(url);
    response = await response.json();

    setStudentData(response);
  }

  const deleteData = async (id) => {
    const url = "http://localhost:3000/students";

    let response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Record Deleted Successfully 🚀");
      renderData();
    }
  };

  const editData = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-center p-5">
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">
          
          <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">
              Student Management
            </h1>

            <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold">
              Total : {studentData.length}
            </span>
          </div>

          <table className="w-full">
            <thead className="bg-slate-800 text-white">
              <tr className="[&>th]:py-4 [&>th]:px-6 text-left">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {studentData.map((students) => (
                <tr
                  key={students.id}
                  className="border-b hover:bg-slate-100 transition duration-300"
                >
                  <td className="px-6 py-4 font-semibold text-gray-700">
                    {students.studentId}
                  </td>

                  <td className="px-6 py-4">{students.name}</td>

                  <td className="px-6 py-4 text-blue-600">
                    {students.email}
                  </td>

                  <td className="px-6 py-4">{students.city}</td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => editData(students.id)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteData(students.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {studentData.length === 0 && (
            <div className="text-center py-10 text-gray-500 text-lg">
              No Student Records Found 
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DisplayData;