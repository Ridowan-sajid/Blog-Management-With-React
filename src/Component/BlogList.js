import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogList({blog}) {
  return (
    <div>
        {blog.map((b)=>
        (
          <div key={b.id}>
            <h4>Title: {b.title}</h4>
            <p>author: {b.author}</p>
            <Link to={`/blog/${b.id}`}><button>Details</button></Link>
          </div>
        )
       )}
    </div>
  )
}
