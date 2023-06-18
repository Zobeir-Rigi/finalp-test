import React from "react";
import "../styles/Main.css";

import CodeWars from "./CodeWars";
import Pulls from "./Pulls";
import UserCodewars from "./UserCodewars";
import Milestone from "./Milestone";
const Main = () => {
  return (
    <div className="main">
      <CodeWars />
      <UserCodewars />
      <Pulls />
      <Milestone />
    </div>
  );
};

export default Main;
