import React, { useEffect } from "react";
import { Provider, useQuery } from "use-http";
import { API_GRAPHQL_URL } from "../../../constants";
import PageContainer from "../components/PageContainer";
import { getAllProducts } from "./queries";
import Product from "./Product";

const Products = () => {
  const { data, loading, error, query } = useQuery([getAllProducts]);

  useEffect(() => {
    query();
  }, []);

  return (
    <PageContainer>
      <h2>Products</h2>
      {error && <p>Error!</p>}
      {loading && <p>Loading...</p>}
      {data && data.allProducts.map(product => <Product key={product.id} {...product} />)}
    </PageContainer>
  );
};

export default props => (
  <Provider
    url={API_GRAPHQL_URL}
    options={{
      retries: 1,
      loading: true,
    }}
  >
    <Products {...props} />
  </Provider>
);
