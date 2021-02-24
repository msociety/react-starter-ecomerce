import React, { useEffect } from "react";
import useFetch, { Provider } from "use-http";
import PageContainer from "../components/PageContainer";
import { API_REST_URL } from "../../../constants";

const Clients = () => {
  const { data, loading, error, get, response } = useFetch("/clients");

  useEffect(() => {
    get();
  }, []);

  return (
    <PageContainer>
      <h2>Clients</h2>
      {error && (
        <p>
          {response.status}: {response.statusText}
        </p>
      )}
      {loading && <p>Loading...</p>}
      {Array.isArray(data) && data.map(client => <div key={client.id}>{client.firstName}</div>)}
    </PageContainer>
  );
};

export default props => (
  <Provider
    url={API_REST_URL}
    options={{
      retries: 1,
      loading: true,
    }}
  >
    <Clients {...props} />
  </Provider>
);
