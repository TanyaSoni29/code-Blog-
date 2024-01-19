import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import Header from '../Components/Header';
import Spinner from '../Components/Spinner';
import BlogDetails from '../Components/BlogDetails';

function BlogPage() {
  const newBaseUrl ="https://codehelp-apis.vercel.app/api/"
  const [blog, setBlog] =useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);
  const navigate = useNavigate();
  const {loading, setLoading} = useContext(AppContext);

 async function fetchRelatedBlog() {
  setLoading(true);
  let url =`${newBaseUrl}get-blog?blogId=${blogId}`
  try {
    const res =  await fetch(url);
    const data = await res.json();
    console.log(data)
    setBlog(data.blog);
    setRelatedBlogs(data.relatedBlogs )

  } catch (error) {
    console.log("Blogs Are Not Found", error);
    setBlog(null)
    setRelatedBlogs([])
    
  }
setLoading(false)
 }

 useEffect( () =>{
  if(blogId){
    fetchRelatedBlog();
  }
 },[location.pathname])

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
    <Header/>
    <div className='flex w-11/12 max-w-[670px] mb-2 mt-24'>
    <button className='rounded-md border-2 px-4 py-1' onClick={() => navigate(-1)}>Back</button>
    </div>
    <div className='flex w-11/12 max-w-[670px] mb-10'>
    {loading?

(<Spinner/>) : 
(blog? (<div >
  <BlogDetails post={blog} />
  <h2 className='font-bold text-[30px] mt-10 mb-6'>Related Blogs</h2>
  {relatedBlogs.map((post) => (<div className='mb-6' key={post.id}><BlogDetails post={post}/></div>) ) }
</div>):(<p> No Blog Found</p>) )}
    </div>
    
    
      
    </div>
  )
}

export default BlogPage
