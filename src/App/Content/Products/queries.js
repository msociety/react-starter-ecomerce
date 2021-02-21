// To allow export queries as plain text from .gql files see:
// https://developer.aliyun.com/mirror/npm/package/parcel-plugin-graphql-raw

export const getAllProducts = `
query getAllProducts {
  allProducts {
    id
    type
    # price
    name
    product
    # description
  }
}
`;
