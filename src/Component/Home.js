import BlogList from './BlogList';
import useFetch from '../lib/useFetch';
import Navbar from './Navbar';

function App() {
  const {blog, err}=useFetch("http://localhost:8000/blogs");

  return (
    <div className="App">
      <Navbar/>
      {blog && <BlogList blog={blog} />}
      {err && <h1></h1>}
    </div>
  );
}

export default App;
