
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>GitHub Explorer</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/repos">Repositories</Link>
      </div>
    </nav>
  );
}

export default Navbar;
