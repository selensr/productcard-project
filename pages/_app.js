import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../graphQL/client/apollo-client";
import { GlobalStyle } from "../styles/global.style";
import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
