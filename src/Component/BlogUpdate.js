import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../lib/useFetch';

export default function CreateBlog() {
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
    // const history=useHistory()
    

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
