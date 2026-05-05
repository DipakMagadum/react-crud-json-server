import {Routes,Route,Link} from 'react-router-dom'
import DisplayData from './DisplayData'
import AddNewData from './AddNewData'
function App() {

  return (
   <>
   <h1 className='text-center mt-2 '>React CRUD json server</h1>
    <div className='flex justify-center gap-4'>
      
        <Link
         className='bg-sky-500 p-1 rounded text-white' 
        to="/">Display Data</Link>
        
        <Link
         className='bg-sky-500 p-1 rounded text-white'
         to="/add">Add New Data</Link>
    </div>

    <Routes>
      <Route path='/' element={<DisplayData/>}/>
       <Route path='/add' element={<AddNewData/>}/>
    </Routes>
   </>
  )
}

export default App
