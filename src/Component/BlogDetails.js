import React from 'react'
import useFetch from '../lib/useFetch';
import { useParams,Link } from 'react-router-dom';

export default function BlogDetails() {
    const { id } = useParams();
    const {blog, err}=useFetch("http://localhost:8000/blogs/"+id);

    const handleClick=(id)=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE',
        })
        .then(()=>{
            // history.push('/')
        })
    }
    
  return (
    <div>
        <div key={blog.id}>
            <h4>Titile: {blog.title}</h4>
            <p>Details: {blog.body}</p>
            <p>Author: {blog.author}</p>
            <Link to={`/blog/update/${blog.id}`}><button>Update</button></Link>
            <button type='submit' onClick={()=>handleClick(blog.id)}>Delete</button>
            
        </div>
    </div>
  )
}
