import React from "react";
import { useState } from "react";
import "../styles/Pulls.css"
import Footer from "./Footer"

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
    <div className="Pulls">
      <h3>Pull Requests</h3>
      <div className="input-button">
        <input
          type="text"
          value={username}
          onChange={handleUserName}
          placeholder="Enter Your Github User Name ..."
        />
        <button onClick={handleFetchData}>Go for It</button>
      </div>

      <h4>Your Total Pull Requests are : {data.length}</h4>
      <div>
        <ol className="">
          {data.map((pull, index) => (
            <li key={index} className="">
              {pull.url.replace(
                "https://api.github.com/repos/CodeYourFuture/",
                ""
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Pulls;
