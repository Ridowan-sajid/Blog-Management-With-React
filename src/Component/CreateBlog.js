import React, { useState,useEffect } from 'react'
// import { useHistory } from "react-router-dom";

export default function CreateBlog() {

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
                // history.push('/')
            })
        }
    
    

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" name='title' value={blog.title} onChange={handleChange} /><br />

            <label>Details</label>
            <textarea type="text" name='body' value={blog.body} onChange={handleChange} /><br />

            <label>Author</label>
            <input type="text" name='author' value={blog.author} onChange={handleChange} /><br />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
