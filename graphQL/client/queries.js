import { gql } from "@apollo/client/core";

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      title
      imageUrl
      url
      price
      shipment
    }
  }
`;
