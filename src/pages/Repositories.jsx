import React, { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard"

function Repositories() {
    const [username, setUsername] = useState("3gzon");
    const [errors, setErrors]=useState("")
    const [repos,setRepos]=useState([])

    const getRepos = () => {
        fetch(`https://api.github.com/users/${username}/repos?per_page=30`)
            .then((res) => {
                if (!res.ok) {
                throw new Error("github is not working")
                }
                return res.json();
            }).then((data) => setRepos(data))
        .catch((error)=>setErrors(error))
    }

    useEffect(() => {
        getRepos();
    },[])
    return (
        <div>
            <h1>find repos</h1>
            <div className="search">
                <input type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <button onClick={getRepos}>Search</button>
            </div>
            <div className="repo-grid">
                {
                    repos.map((repo) => (
                        <RepoCard repo={repo} key={repo.id}/>
                    ))
                }
            </div>
      </div>
  )
}

export default Repositories;
