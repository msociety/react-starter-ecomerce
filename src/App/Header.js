import React from "react";
import { Link } from "@reach/router";

export default () => {
  console.log("hi");
  return (
    <header>
      <Link to="/">
        <h1>e-commerce admin</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
