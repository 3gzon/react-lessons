
import { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";

function Repositories() {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("3gzon");
  const [error, setError] = useState("");

  const getRepos = () => {
    setError("");
    setRepos([]);

    fetch(`https://api.github.com/users/${username}/repos?per_page=30`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found or request failed");
        }

        return res.json();
      })
      .then((data) => setRepos(data))
      .catch(() => {
        setError("No repositories found");
      });
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div>
      <h1>GitHub Repositories</h1>

      <div className="search">
        <input
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={getRepos}>
          Search
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {repos.length > 0 && (
        <div className="profile-header">
          <img
            src={repos[0].owner.avatar_url}
            alt="GitHub Profile"
          />

          <h2>{repos[0].owner.login}</h2>
        </div>
      )}

      {!error && repos.length === 0 && (
        <p>No repositories found</p>
      )}

      <div className="repo-grid">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default Repositories;
