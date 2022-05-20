import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import "../styles/Home.module.css"
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
