import React, { useState } from "react";
import "../styles/Pulls.css";
import { fetchData } from "../FilterMandatory";

const Pulls = () => {
  const [username, setUserName] = useState("");
  const [filteredPulls, setFilteredPulls] = useState([]);

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const githubUrl = `https://api.github.com/search/issues?q=is:pr%20author:${username}%20user:codeyourfuture`;

  const handleFetchData = () => {
    fetchData(githubUrl)
      .then((filteredPulls) => {
        setFilteredPulls(filteredPulls);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  return (
    <div className="Pulls">
      <h3>The number of mandatory pulls you have done</h3>
      <div className="input-button">
        <input
          type="text"
          value={username}
          onChange={handleUserName}
          placeholder="Enter Your Github User Name ..."
        />
        <button onClick={handleFetchData}>Go for It</button>
      </div>

      <h4>Your Total Pull Requests: {filteredPulls.length}</h4>
      <div>
        <ol className="">
          {filteredPulls.map((pull, index) => (
            <li key={index} className="">
              {
                pull.url
                  .replace("https://api.github.com/repos/CodeYourFuture/", "")
                  .split("/")[0]
              }
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Pulls;
