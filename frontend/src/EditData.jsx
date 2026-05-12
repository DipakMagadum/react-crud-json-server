
function EditData() {
  return (
    <> <div className="flex justify-center items-center h-screen ">
        <form className="flex flex-col gap-3 border border-gray-400  px-4 py-3 shadow-xl rounded  bg-white w-72">
          <label className="text-sky-500 text-lg font-serif font-semibold">
            ID
          </label>

          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="enter your id "
            onChange={(e) => setId(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            Name
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="enter your name "
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            Email
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="email"
            placeholder="enter your email "
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sky-500 text-lg font-serif font-semibold">
            City
          </label>
          <input
            className="border  border-gray-400 p-1 rounded-sm "
            type="text"
            placeholder="enter your city "
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            className="bg-sky-500 p-1 rounded-lg text-white hover:bg-sky-700"
          >
            Update Data
          </button>
        </form>
      </div>
    
    </>
  )
}

export default EditData