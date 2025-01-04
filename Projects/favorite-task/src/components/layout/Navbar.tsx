import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-3xl font-extrabold">Logo</h1>
        </Link>
      </div>

      <Link to="/users" className="text-lg font-semibold">
        Users
      </Link>
      <Link to="/tasks" className="text-lg font-semibold">
        Tasks
      </Link>
    </nav>
  );
}
