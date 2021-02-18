// Using axios we wouldn't need or customFetch or neither converting response to json

// const customFetch = ((originalFetch) => {
//   return (...arguments) => {
//     const result = originalFetch.apply(this, arguments);
//     return result.then(console.log("Request was sent"));
//   };
// })(fetch);

export const getAllClients = () =>
  fetch("/clients", {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const searchClients = (queryParams) =>
  fetch(`/clients?${queryParams}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
