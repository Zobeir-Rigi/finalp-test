import { useState, useEffect } from "react";
import "../styles/Codewars.css"
const CodeWars = () => {
  const url = "https://www.codewars.com/api/v1/users/Zobeir-Rigi";
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);setData(data)
      })
      .catch((error) => console.log("I coudn't fetch the data", error));
  }, []);
  return (
    <section className="codewars">
        <h3>fetching data based my user name </h3>
      {data ? <span>Name : {data.name}</span> : <span>Loading </span>}
      {data ? <span>Honor : {data.honor}</span> : <span>Loading </span>}
      {data ? <span>Clan : {data.clan}</span> : <span>Loading </span>}
      {data ? <span>Rank : {data.ranks.overall.name}</span> : <span>Loading </span>}
    </section>
  );
};

export default CodeWars;
