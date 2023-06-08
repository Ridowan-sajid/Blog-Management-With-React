import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

export default function CreateBlog() {
    const navigate=useNavigate();

    const [blog,setBlog]=useState({
        title:"",
        body:"",
        author:""
    })
    // const history=useHistory()

    const handleChange=(e)=>{
        setBlog({
          ...blog,
          [e.target.name]:e.target.value
        });
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8000/blogs/",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            })
            .then(()=>{
                setBlog({
                    title:"",
                    body:"",
                    author:""
                })
                navigate('/')
            })
        }
    
    

  return (
    <div>
        <Navbar/>
        <form action="" className='container my-5' onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" name='title' value={blog.title} onChange={handleChange} /><br />
            </div>
            <div className="form-group">
            <label>Details</label>
            <textarea type="text" cols="30" rows="10" className="form-control" name='body' value={blog.body} onChange={handleChange} /><br />
            
            </div>
            <div className="form-group">
            <label>Author</label>
            <input type="text" className="form-control" name='author' value={blog.author} onChange={handleChange} /><br />
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    </div>
  )
}
