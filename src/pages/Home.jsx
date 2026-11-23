
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to GitHub Explorer</h1>

      <p>
        Explore GitHub repositories and see their files.
      </p>

      <Link to="/repos">
        <button>Explore Repositories</button>
      </Link>
    </div>
  );
}

export default Home;
