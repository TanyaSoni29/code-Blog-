import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({post}) {
  return (
    <div className='flex flex-col'>
      <NavLink to={`/blog/${post.id}`}> <span className='text-lg font-bold hover:underline'>{post.title}</span> </NavLink>
        <p className='text-sm mt-[4px]'> By <span className=' italic'>{post.author}</span> on {" "}<NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}><span className='underline font-bold'>{post.category}</span></NavLink> </p>
        <p className='text-sm mt-[4px]'>Posted on <span>{post.date}</span></p>
        <p className='text-md mt-[14px]'>{post.content}</p>
        <p className='flex gap-x-3'>{post.tags.map( (tag, index) => (<NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}><span className='text-blue-700 text-xs font-bold underline mt-[5px]' >{`#${tag}`}</span></NavLink>))}</p>
    </div>

    
    
  )
}

export default BlogDetails
