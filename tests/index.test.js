import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import App from "../pages/index";
import { GET_PRODUCTS } from "../graphQL/client/queries";

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: {
        products: [
          {
            id: "733324",
            title:
              "Apple iPhone 11 64 GB Pro Cep Telefonu Apple Türkiye Garantili Siyah",
            imageUrl:
              "https://mcdn01.gittigidiyor.net/65570/tn30/655708439_tn30_0.jpg?161340",
            url: "https://www.gittigidiyor.com/apple-iphone-12_spp_849455",
            price: "7,500 TL",
            shipment: "Ücretsiz Kargo",
          },
          {
            id: "733280",
            title:
              "Apple iPhone 11 128 GB Pro Cep Telefonu Apple Türkiye Garantili Siyah ",
            imageUrl:
              "https://mcdn01.gittigidiyor.net/65570/tn30/655708439_tn30_0.jpg?161340",
            url: "https://www.gittigidiyor.com/apple-iphone-12_spp_849455",
            price: "7,999 TL",
            shipment: "Ücretsiz Kargo",
          },
        ],
      },
    },
  },
];

const mock = [
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: {
        products: [
          {
            id: "733324",
            title:
              "Apple iPhone 11 64 GB Pro Cep Telefonu Apple Türkiye Garantili Siyah",
            imageUrl:
              "https://mcdn01.gittigidiyor.net/65570/tn30/655708439_tn30_0.jpg?161340",
            url: "https://www.gittigidiyor.com/apple-iphone-12_spp_849455",
            price: "7,500 TL",
            shipment: "Ücretsiz Kargo",
          },
        ],
      },
    },
  },
];

it("renders without error", async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await new Promise((resolve) => setTimeout(resolve, 0));
  const tree = component.toJSON();
  expect(tree.children[0].children[0]).toContain(
    "İlginizi Çekebilecek Ürünler"
  );
});

it("should render products", async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 0));
  const tree = component.toJSON();
  expect(tree.children[1].children.length).toBe(2);
});

it("should work with component state", async () => {
  const e = { preventDefault: jest.fn() };
  const component = TestRenderer.create(
    <MockedProvider mocks={mock} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 0));
  component.root.findByType("span").props.onClick(e);

  expect(component.root.findByProps({ className: "icon" }).props.color).toBe(
    "#f24141"
  );
});
