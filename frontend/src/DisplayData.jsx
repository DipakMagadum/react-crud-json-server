import { useEffect, useState } from "react";
function DisplayData() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    renderData();
  }, []);

  async function renderData() {
    const url = "http://localhost:3000/students";
    let response = await fetch(url);
    response = await response.json();
    //console.log(response);

    setStudentData(response);
  }

  const deleteData = async (id) => {
    const url = "http://localhost:3000/students";
    let response = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    
    if (response.ok) {
      alert("Record Deleted....");
      renderData();
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-96 ">
        <table>
          <thead className="bg-sky-600  text-white [&>tr>th]:px-5 [&>tr>th]:py-2">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center  ">
            {studentData.map((students) => (
              <tr
                key={students.id}
                className="[&>td]:px-5 [&>td]:py-2 hover:bg-gray-300"
              >
                <td>{students.studentId}</td>
                <td>{students.name}</td>
                <td>{students.email}</td>
                <td>{students.city}</td>
                <td>
                  <button
                    onClick={() => deleteData(students.id)}
                    className="bg-red-600 px-3 py-1 rounded-lg text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayData;
