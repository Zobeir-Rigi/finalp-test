import React from "react";
import { useState } from "react";
import "../styles/UserCodewars.css";
const UserCodewars = () => {
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
      <h3>milestone</h3>
      <input type="text" value={username} onChange={handleUserName} />

      <button onClick={handleFetchData}>see list of pull request</button>
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
  );
};

export default UserCodewars;
