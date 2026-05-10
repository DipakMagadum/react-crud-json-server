import {Routes,Route,Link} from 'react-router-dom'
import DisplayData from './DisplayData'
import AddNewData from './AddNewData'
import EditData from './EditData'
function App() {

  return (
   <>
  
    <div className='flex justify-center gap-4 mt-5'>
      
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
       <Route path='/edit' element={<EditData/>}/>
    </Routes>
   </>
  )
}

export default App
