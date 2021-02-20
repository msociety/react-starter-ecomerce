import React, { Suspense, lazy } from "react";
import { Router } from "@reach/router";

import Login from "./Login";
const Clients = lazy(() => import("./Clients"));
const Products = lazy(() => import("./Products"));

export default () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Login path="login" />
        <Clients path="clients" />
        <Products path="products" />
      </Router>
    </Suspense>
  );
};
