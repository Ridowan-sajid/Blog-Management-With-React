import './App.css';
import React from 'react'
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from './Component/BlogDetails';
import CreateBlog from './Component/CreateBlog';
import BlogUpdate from './Component/BlogUpdate';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/blog/create" element={<CreateBlog />} />
      <Route path="/blog/update/:id" element={<BlogUpdate />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
