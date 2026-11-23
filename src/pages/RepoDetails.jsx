
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FileList from "../components/FileList";

function RepoDetails() {
  const { username, repoName } = useParams();

  const [repo, setRepo] = useState(null);
  const [files, setFiles] = useState([]);
  const [path, setPath] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
      .then((res) => res.json())
      .then((data) => setRepo(data));
  }, [username, repoName]);

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/${username}/${repoName}/contents/${path}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Repository is empty");
        }
  
        return res.json();
      })
      .then((data) => setFiles(data))
      .catch(() => {
        setFiles([]);
      });
  }, [username, repoName, path]);

  const goBack = () => {
    const folders = path.split("/");
    folders.pop();
    setPath(folders.join("/"));
  };

  return (
    <div>
      <Link to="/repos">Back to Repositories</Link>
      {files.length === 0 && (
  <p>This repository is empty.</p>
)}

<FileList files={files} setPath={setPath} />

      {repo && (
        <div>
          <h1>{repo.name}</h1>
          <p>{repo.description}</p>
          <p>Language: {repo.language}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Forks: {repo.forks_count}</p>

          <a href={repo.html_url} target="_blank" rel="noreferrer">
            Open on GitHub
          </a>
        </div>
      )}

      <h2>Repository Files</h2>
      <p>Current folder: /{path}</p>

      {path && (
        <button onClick={goBack}>
          Back to Parent Folder
        </button>
      )}

      <FileList files={files} setPath={setPath} />
    </div>
  );
}

export default RepoDetails;
