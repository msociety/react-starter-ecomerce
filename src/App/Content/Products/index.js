import React, { useEffect } from "react";
import useFetch from "use-http";
import { API_GRAPHQL_URL } from "../../../constants";
import PageContainer from "../components/PageContainer";
import { getAllProducts } from "./queries";

export default () => {
  const { data, loading, error, query } = useFetch(API_GRAPHQL_URL);
  useEffect(() => {
    query(getAllProducts);
  }, []);
  return (
    <PageContainer>
      <h2>Products</h2>
      {error && "Error!"}
      {loading && "Loading..."}
      {data && data.data.allProducts.map(product => <div key={product.id}>{product.name}</div>)}
    </PageContainer>
  );
};
