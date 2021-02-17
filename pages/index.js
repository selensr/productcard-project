import { useQuery } from "@apollo/client";
import { useState } from "react";
import styled from "styled-components";
import { initializeApollo } from "../graphQL/client/apollo-client";
import { GET_PRODUCTS } from "../graphQL/client/queries";
import {
  Container,
  Block,
  Wrapper,
} from "../src/components/Layout/layout.style";
import ProductCard from "../src/components/ProductCard/ProductCard";

const Text = styled.h2`
  font-weight: 500;
  padding: 0px 10px;
`;

const Index = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  const { data } = useQuery(GET_PRODUCTS);

  if (!data) {
    return (
      <Container>
        <p>Data getirilemedi</p>
      </Container>
    );
  }

  return (
    <Container>
      <Text>İlginizi Çekebilecek Ürünler</Text>
      <Block>
        {data.products?.map((product) => {
          const { shipment, id } = product;
          const isLiked = !!likedProducts.find((el) => el === id);
          const isFreeShipment = !!shipment.indexOf("Ücretsiz") > -1;

          const onLike = (e) => {
            e.preventDefault();
            if (isLiked) {
              const newProductArr = likedProducts.filter((el) => el !== id);
              setLikedProducts(newProductArr);
            } else {
              setLikedProducts([...likedProducts, id]);
            }
          };

          return (
            <Wrapper key={id}>
              <ProductCard
                {...product}
                onLike={onLike}
                isLiked={isLiked}
                isFreeShipment={isFreeShipment}
              />
            </Wrapper>
          );
        })}
      </Block>
    </Container>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PRODUCTS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
