import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>I am the home</h1>
      <ul>
        <li>
          <Link to="/product/2">Go to product 2 (normal link)</Link>
        </li>
        <li>
          <button onClick={() => navigate("/product/3")}>
            Go to product 3 (history.push)
          </button>
        </li>
      </ul>
    </div>
  );
};
