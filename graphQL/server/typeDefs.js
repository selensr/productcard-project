const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: String!
    title: String!
    imageUrl: String!
    url: String!
    price: String!
    shipment: String!
  }

  type Query {
    products: [Product]
  }
`;

module.exports = typeDefs;
