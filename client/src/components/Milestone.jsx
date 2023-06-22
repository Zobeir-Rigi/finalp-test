import React from "react";
import { useState } from "react";
import "../styles/Milestone.css";

const Milestone = () => {
  const [searchInput, setSearchInput] = useState(""); // which is the user name
  const [CodewarsRank, setCodewarsRank] = useState([]);
  const [pullRequestNumber, setPullRequestNumber] = useState([]);

  const handleSearchInput = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };
  const codeWarsUrl = `https://www.codewars.com/api/v1/users/${searchInput}`; //get specific user data from codewars
  const githubUrl = `https://api.github.com/search/issues?q=is:pr%20author:${searchInput}%20user:codeyourfuture`; //get specific user data from Github
  /* search if the user name exist and then find the codewars rank and the number of pull requests*/
  const handleSearch = () =>{
    fetchCodeWarsRank();
    fetchPullRequestCount();
  }

  /*********************************Function => Fetching User Codewars Account data */
  const fetchCodeWarsRank = () => {
    fetch(codeWarsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Codewars date" , data)
           const codewarsRankNumber = data.ranks.overall.name;
        if( codewarsRankNumber ) {
            console.log("I find Codewars Rank in the Data ...")
            setCodewarsRank(codewarsRankNumber);
        } 
      })
      .catch((err) => console.log("something is wrong", err))
    };

    /*********************************Function => Fetching User Github Account data */
    const fetchPullRequestCount = () => {
      fetch(githubUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Pull requestes data", data)
        if ( data.total_count ) {
          console.log("The Number of Pull Request is = ",data.total_count )
          setPullRequestNumber(data.total_count);
        }
      })
      .catch((err) => console.log("something is wrong", err));
  };

  return (
    <div className="MileStone">
      <h3>Milestone</h3>
      <div className="input-button">
        
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Enter Your Github User Name ..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Pulls</th>
              <th>Codewars</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pullRequestNumber}</td>
              <td>{CodewarsRank}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Milestone;