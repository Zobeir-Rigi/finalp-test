import React from "react";
import "../styles/Main.css";

import CodeWars from "./CodeWars";
import UserCodewars from "./UserCodewars";
const Main = () => {
  return (
    <div className="main">
      <CodeWars />
      <UserCodewars />
    </div>
  );
};

export default Main;
