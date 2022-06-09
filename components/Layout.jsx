// ------------------ LAYOUT PAGE -------------------

import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import HeadTroduction from "./HeadTroduction";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>GenClone</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <HeadTroduction />
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
