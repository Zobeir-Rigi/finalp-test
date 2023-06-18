import React from "react";
import { useState } from "react";
import "../styles/UserCodewars.css";
const UserCodewars = () => {
  const [username, setUserName] = useState("");
  const [userCodwars, setUserCodewars] = useState([]);
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const url = `https://www.codewars.com/api/v1/users/${username}`;
  const handleFetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserCodewars(data);
        console.log(data);
      })
      .catch((err) => console.log("soething is wrong", err));
  };
  return (
    <div className="UserCodewars">
      <h3>Enter your user name to see your rank</h3>
      <input type="text" value={username} onChange={handleUserName} />
      <button onClick={handleFetchData}>What is my rank?</button>
      {userCodwars && (
        <div className="generate-score">
          <span>Name : {userCodwars.name}</span>
          <span>Honor : {userCodwars.honor}</span>
          <span>Clan :{userCodwars.clan}</span>
          <span>Rank : 
            {userCodwars.ranks &&
              userCodwars.ranks.overall &&
              userCodwars.ranks.overall.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserCodewars;
