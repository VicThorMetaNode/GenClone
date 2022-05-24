import React from "react";

//Import Parallax Animation
import { useInView } from "react-intersection-observer";

import styles from "../../styles/Home.module.css";

// Import CHAKRA tools
import {
  Center,
  Box,
  Container,
  Text,
  Link,
  Flex,
  List,
  ListItem,
  ListIcon,
  Divider,
  Button,
} from "@chakra-ui/react";

//-------------- BROWSER  -----------

const BannerText = () => {
  // const { ref: refTextBanner, inView: myParallaxTextRolling } = useInView();
  return (
    <>
      <Box w="auto" height="5rem" ref={refTextBanner}>
        <Text
          color="#e6ca6f"
          fontSize="3xl"
          // className={`${
          //   myParallaxTextRolling ? styles.animateMyTextBanner : ""
          // } ${"text-rolling"}`}
        >
          we are not genflow . We are genclone . they are entrepreneurs . we are
          web dev .
        </Text>
      </Box>
    </>
  );
};

export default BannerText;
