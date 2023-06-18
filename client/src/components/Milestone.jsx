import React from "react";
import { useState } from "react";
import "../styles/UserCodewars.css";
const UserCodewars = () => {
  const [username, setUserName] = useState("");
  const [userCodwars, setUserCodewars] = useState([]);
  const [data, setData] = useState([]);
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const url = `https://www.codewars.com/api/v1/users/${username}`;
  const githubUrl = `https://api.github.com/search/issues?q=is:pr%20author:${username}%20user:codeyourfuture`;

  const handleFetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserCodewars(data);
        console.log(data);
      })
      .catch((err) => console.log("soething is wrong", err));

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

      <button onClick={handleFetchData}>see milestone</button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">pulls</th>
            <th scope="col">codewars</th>
            <th scope="col">codility</th>
            <th scope="col">performance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.length}</td>
            <td>
              {userCodwars.ranks &&
                userCodwars.ranks.overall &&
                userCodwars.ranks.overall.name}
            </td>
            <td>---</td>
            <td>---</td>
          </tr>
        </tbody>
      </table>
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

export default UserCodewars;
