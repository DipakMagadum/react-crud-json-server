import React from 'react'

function AddNewData() {
  return (
    <>
    <div className='flex justify-center items-center h-screen '>
      <form
        className='flex flex-col gap-3 border border-gray-400  px-4 py-3 shadow-xl rounded  bg-white w-72'
      action="">
        <label >ID</label>
        <input 
        className='border  border-gray-400 p-1 rounded-sm '
          type="text"
          placeholder='enter your id '
        />

           <label >Name</label>
         <input 
           className='border  border-gray-400 p-1 rounded-sm '
          type="text"
          placeholder='enter your name '
        />

           <label >Email</label>
         <input 
           className='border  border-gray-400 p-1 rounded-sm '
          type="text"
          placeholder='enter your email '
        />

         <label >City</label>
         <input 
           className='border  border-gray-400 p-1 rounded-sm '
          type="text"
          placeholder='enter your city '
        />

        <button
          className='bg-sky-500 p-1 rounded-lg text-white'
        >Add New Data</button>
      </form>
    </div>
    </>
  )
}

export default AddNewData