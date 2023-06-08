import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogList({blog}) {
  return (
    <div className='container my-5'>
        {blog.map((b)=>
        (
          <div key={b.id}>
            <h4>Title: {b.title}</h4>
            <p>author: {b.author}</p>
            <Link to={`/blog/${b.id}`}><button className='btn btn-outline-primary'>Details</button></Link>
            <br /><br />
          </div>
        )
       )}
    </div>
  )
}
