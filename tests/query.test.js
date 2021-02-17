const { ApolloServer } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");
const typeDefs = require("../graphQL/server/typeDefs");
const resolvers = require("../graphQL/server/resolvers");
const { gql } = require("apollo-server");

const createTestServer = (ctx) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    mockEntireSchema: false,
    mocks: true,
    context: () => ctx,
  });

  return createTestClient(server);
};

export const PRODUCT = gql`
  {
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

describe("queries", () => {
  test("product", async () => {
    const { query } = createTestServer({
      products: {
        id: "733280",
        title:
          "Apple iPhone 11 128 GB Pro Cep Telefonu Apple Türkiye Garantili Siyah ",
        imageUrl:
          "https://mcdn01.gittigidiyor.net/65570/tn30/655708439_tn30_0.jpg?161340",
        url: "https://www.gittigidiyor.com/apple-iphone-12_spp_849455",
        price: "7,999 TL",
        shipment: "Ücretsiz Kargo",
      },
    });

    const res = await query({ query: PRODUCT });
    expect(res).toMatchSnapshot();
  });
});
