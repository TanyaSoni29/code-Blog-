import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-" , " ")
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
    
    <Header/>

    <div className='w-11/12 max-w-[670px] flex flex-col'>
    <div className='flex gap-2  mt-24'>
    <button onClick={() => navigate(-1)} className='rounded-md border-2 px-4 py-1'>Back</button>
    <h2 className=' font-bold text-[20px]'>
     Blogs On <span className='underline'>{category}</span>
     </h2>
    
    </div>
    <div className='-mt-[10px]'><Blogs/></div>
   

   </div>
   <Pagination/>

   
    
      
    </div>
  )
}

export default CategoryPage
