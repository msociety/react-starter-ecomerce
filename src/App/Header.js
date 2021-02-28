import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;

  background: #333;
  a,
  h1 {
    color: #fff;
  }
`;

const Menu = styled.nav`
  > ul {
    display: flex;
    > li {
      padding: 0.5em 1em;
    }
  }
`;

export default () => {
  return (
    <Container>
      <Link to="/">
        <h1>e-commerce admin</h1>
      </Link>
      <Menu>
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
      </Menu>
    </Container>
  );
};
