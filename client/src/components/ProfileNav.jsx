import React from 'react'
import { Link } from 'react-router-dom'
const Test = () => {
  return (
    <div>
      <ul className="features">
        <li>
          <Link to="/CodeWars">CodeWars</Link>
        </li>
        <li>
          <Link to="/Pull Requests">Pull Requests</Link>
        </li>
        <li>
          <Link to="/MileStone">MileStone</Link>
        </li>
      </ul>
    </div>
  );
}

export default Test