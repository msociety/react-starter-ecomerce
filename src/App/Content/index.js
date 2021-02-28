import React, { Suspense, lazy } from "react";
import { Router, Redirect } from "@reach/router";

import Login from "./Login";
import NotFound404 from "./NotFound404";
const Clients = lazy(() => import("./Clients"));
const Products = lazy(() => import("./Products"));

export default () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Login path="login" />
        <Clients path="clients/*" />
        <Products path="products/*" />
        <Redirect from="/" to="clients" />
        <NotFound404 default />
      </Router>
    </Suspense>
  );
};
