import { useState, useEffect } from "react";
import User from "./User";
import "./style.css";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("ghostborn");
  const [loading, setLoading] = useState(true);
  const [userData, SetUserData] = useState(null);

  async function fetchGithubUserData() {
    setLoading(true);

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      console.log(data, "data!!");
      if (data.status === "404") {
        console.error("Failed to fetch GitHub user data:", data.message);
        return;
      }
      SetUserData(data);
    } catch (error) {
      console.error("Failed to fetch GitHub user data:", error);
      SetUserData(null);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    if (!userName.trim()) return;
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="githb-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
