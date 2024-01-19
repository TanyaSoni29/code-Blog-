import React, { useContext } from 'react'
import Header from '../Components/Header'
import { Navigate, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

function TagPage() {
  const navigate =useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
    <Header/>
   
    <div className='flex w-11/12 max-w-[670px] gap-2 mb-2 mt-24'>
    <button className='rounded-md border-2 px-4 py-1' onClick={() => navigate(-1)}>Back</button>
    
    <h2 className=' font-bold text-[20px]'>
      Blogs Tagged <span  className='underline'>#{tag}</span>
    </h2>
    
     

    </div>
    <div className='-mt-[20px]'><Blogs/></div>
   

    <Pagination/>
      
    </div>
  )
}

export default TagPage
