import React from 'react'
import useFetch from '../lib/useFetch';
import { useParams,Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

export default function BlogDetails() {
    const navigate=useNavigate();

    const { id } = useParams();
    const {blog, err}=useFetch("http://localhost:8000/blogs/"+id);

    const handleClick=(id)=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE',
        })
        .then(()=>{
            navigate('/')
        })
    }
    
  return (
    <div>
        <Navbar/>
        <div key={blog.id} className='container my-5'>
            <h4>Titile: {blog.title}</h4>
            <p>{blog.body}</p>
            <h6>Author: {blog.author}</h6>
            <Link to={`/blog/update/${blog.id}`}><button className='btn btn-outline-primary'>Update</button></Link>
            <button className='btn btn-outline-primary mx-3' type='submit' onClick={()=>handleClick(blog.id)}>Delete</button>
        </div>
        {err && <h4>{err}</h4>}
    </div>
  )
}
