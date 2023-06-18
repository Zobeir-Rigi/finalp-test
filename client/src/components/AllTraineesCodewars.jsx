import React, { useState, useEffect } from "react";

const AllTraineesCodewars = () => {
  const url = "https://www.codewars.com/api/v1/users";
  const [traineesData, setTraineesData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (user) => user.clan === "CodeYourFuture"
        );
        setTraineesData(filteredData);
      })
      .catch((error) => console.log("Unable to fetch data", error));
  }, []);

  return (
    <div>
      {traineesData.map((trainee) => (
        <div key={trainee.id}>
          <p>Name: {trainee.name}</p>
          <p>Honor: {trainee.honor}</p>
          <p>Clan: {trainee.clan}</p>
          <p>Rank: {trainee.ranks.overall.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AllTraineesCodewars;
