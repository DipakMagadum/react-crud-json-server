
import { useEffect,useState } from 'react';
function DisplayData() {

  const [studentData, setStudentData] = useState([])

  useEffect(()=>{
    renderData();
  },[])

 async function renderData(){
    const url = "http://localhost:3000/students";
    let response =await fetch(url)
    response = await response.json();
    //console.log(response);

    setStudentData(response)
  }
  return (
   <>
      <div className='flex justify-center items-center h-96'>
          <table className='border border-black w-96 '>
          <thead className='text-center border border-black'>
            <tr>
              <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            </tr>
          </thead>
          <tbody className='text-center '>
            {
              studentData.map((students)=>(
                <tr key={students.id} className='border border-black'>
                  <td>{students.id}</td>
                  <td>{students.name}</td>
                  <td>{students.email}</td>
                  <td>{students.city}</td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
   </>
    
  )
}

export default DisplayData