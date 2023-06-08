import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../lib/useFetch';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
    const navigate=useNavigate();
    const { id } = useParams();
    const {blog: data, err}=useFetch("http://localhost:8000/blogs/"+id);//get block but as data


    const [blog,setBlog]=useState({
        title:"",
        body:"",
        author:""
    })

    useEffect(()=>{
        if(data){
            setBlog({
                title:data.title,
                body:data.body,
                author:data.author
            })
        }
    },[data])
    

    const handleChange=(e)=>{
        setBlog({
          ...blog,
          [e.target.name]:e.target.value
        });
        console.log(blog);
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
        .then(()=>{
            setBlog({
                title:blog.title,
                body:blog.body,
                author:blog.author
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
            <input type="text"  className="form-control" name='author' value={blog.author} onChange={handleChange} /><br />
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    </div>
  )
}
