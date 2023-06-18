import React from "react";
import { useState } from "react";
import "../styles/UserCodewars.css";
const Pulls = () => {
  const [username, setUserName] = useState("");
  const [data, setData] = useState([]);
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const githubUrl = `https://api.github.com/search/issues?q=is:pr%20author:${username}%20user:codeyourfuture`;

  const handleFetchData = () => {
    fetch(githubUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
        console.log(data);
      })
      .catch((err) => console.log("soething is wrong", err));
  };

  return (
    <div className="UserCodewars">
      <h3>Pull request</h3>
      <input type="text" value={username} onChange={handleUserName} />

      <button onClick={handleFetchData}>see list of pull request</button>
      <div>
        <h4>pull request number : {data.length}</h4>
        <ul>
          {data.map((pull) => (
            <li>
              {pull.url.replace(
                "https://api.github.com/repos/CodeYourFuture/",
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pulls;
