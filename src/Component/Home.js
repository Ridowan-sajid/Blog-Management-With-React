import BlogList from './BlogList';
import useFetch from '../lib/useFetch';

function App() {
  const {blog, err}=useFetch("http://localhost:8000/blogs");

  return (
    <div className="App">
      {blog && <BlogList blog={blog} />}
      {err && <h1></h1>}
    </div>
  );
}

export default App;
