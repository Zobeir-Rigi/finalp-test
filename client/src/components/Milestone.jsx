import React from "react";
import { useState } from "react";
import "../styles/Milestone.css";
const Milestone = () => {
  const [username, setUserName] = useState(""); //Input
  const [userCodwarsInfo, setUserCodewarsInfo] = useState([]);
  const [data, setData] = useState([]);
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const codeWarsUrl = `https://www.codewars.com/api/v1/users/${username}`; //get specific user data from codewars
  const githubUrl = `https://api.github.com/search/issues?q=is:pr%20author:${username}%20user:codeyourfuture`; //get specific user data from Github

  /********************************* Fetching User Codewars Account data */
  const handleFetchData = () => {
    fetch(codeWarsUrl)
      .then((res) => res.json())
      .then((data) => {
        setUserCodewarsInfo(data);
        console.log(data);
      })
      .catch((err) => console.log("something is wrong", err));
    /********************************* Fetching User Github Account data */
    fetch(githubUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
        console.log("Data.Item is = ", data);
      })
      .catch((err) => console.log("something is wrong", err));
  };

  return (
    <div className="MileStone">
      <h3>Milestone</h3>
      <div className="input-button">
        <input type="text" value={username} onChange={handleUserName} placeholder="Enter Your Github User Name ..."/>
        <button onClick={handleFetchData}>Check Your Milestone</button>
      </div>
      <div className="table-box">
      <table >
        <thead>
          <tr>
            <th >Pulls</th>
            <th >Codewars</th>
            <th >Codility</th>
            <th >Performance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.length}</td>
            <td>
              {userCodwarsInfo.ranks &&
                userCodwarsInfo.ranks.overall &&
                userCodwarsInfo.ranks.overall.name}
            </td>
            <td>---</td>
            
              {data.length > 22 &&
              userCodwarsInfo.ranks.overall.name == "5 kyu" ? (
                <td style={{ backgroundColor: "green" }}>At Milestone</td>
              ) : (
                <td style={{ backgroundColor: "red" }}>Behind Milestone</td>
              )}
            
          </tr>
        </tbody>
      </table>
      </div>
      {/* {userCodwars && (
        <div className="generate-score">
          <span>Name : {userCodwars.name}</span>
          <span>Honor : {userCodwars.honor}</span>
          <span>Clan :{userCodwars.clan}</span>
          <span>
            Rank :
            {userCodwars.ranks &&
              userCodwars.ranks.overall &&
              userCodwars.ranks.overall.name}
          </span>
        </div>
      )}

      <ul>
        {data.map((pull) => (
          <li>{pull.url}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Milestone;
