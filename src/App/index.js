import React, { Suspense, lazy } from "react"
import { Router, Link } from "@reach/router"

import Login from "./Login"
const Clients = lazy(() => import("./Clients"))
const Products = lazy(() => import("./Products"))

export default () => {
  console.log("hi")
  return (
    <>
      <header>
        <Link to="/">
          <h1>e-commerce admin</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="clients">Clients</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Login path="login" />
          <Clients path="clients" />
          <Products path="products" />
        </Router>
      </Suspense>
    </>
  )
}
