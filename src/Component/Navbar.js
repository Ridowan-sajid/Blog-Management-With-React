import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      {/* <Link to={`/`}><button>Home</button></Link>
        <Link to={`/blog/create`}><button>Create</button></Link>
 */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <Link className="nav-item btn btn-primary" to={`/`}>
          Home
        </Link>
        <Link className="nav-item btn btn-primary mx-3" to={`/blog/create`}>
          Create
        </Link>
      </nav>
    </div>
  );
}
