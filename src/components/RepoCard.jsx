
import { Link } from "react-router-dom";

function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>

      <p>{repo.description}</p>

      <p>Language: {repo.language}</p>

      <p>Stars: {repo.stargazers_count}</p>

      <Link to={`/repos/${repo.owner.login}/${repo.name}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default RepoCard;
