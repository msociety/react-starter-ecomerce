import React from "react";
import useFetch from "use-http";
import { API_REST_URL } from "../../../constants";
import PageContainer from "../components/PageContainer";

const CLIENTS_URL = `${API_REST_URL}/clients`;

export default () => {
  const { data, loading, error } = useFetch(CLIENTS_URL, {}, []);
  return (
    <PageContainer>
      <h2>Clients</h2>
      {error && "Error!"}
      {loading && "Loading..."}
      {data && data.map(client => <div key={client.id}>{client.firstName}</div>)}
    </PageContainer>
  );
};
