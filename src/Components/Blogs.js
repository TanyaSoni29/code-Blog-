import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


function Blogs() {
    const{posts, loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] flex flex-col py-8 gap-y-7 justify-center mt-[66px] mb-[70px] items-center'>
    {loading?

     (<Spinner/>) : 
     (posts.length ===0? (<div><p>No Post Found</p></div>) : 
     (posts.map( (post) => <BlogDetails post={post} key={post.id}/>))
    )}
      
    </div>
  )
}

export default Blogs
