import React from "react";

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

const BannerSMlight = ({ title, title2, desc1, desc2 }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box p={8} bg="#f1f1f1" color="#000000">
      <Text
        textAlign="center"
        className="title-span"
        fontSize="2rem"
        textTransform="uppercase"
        fontWeight="400"
        pb={2}
        mb={2}
      >
        {title}
      </Text>
      <Text
        textAlign="center"
        className="title-span"
        fontSize="1.1rem"
        textTransform="uppercase"
        letterSpacing="2px"
        fontWeight="600"
        mb={-4}
      >
        {title2}
      </Text>
      <Container
        textAlign="center"
        className="text-container"
        fontSize="1.1rem"
        fontWeight="400"
        pb={4}
        mt={2}
      >
        {desc1}
      </Container>
      <Container
        textAlign="center"
        className="text-container"
        fontSize="0.90rem"
        fontWeight="200"
        p={2}
        mt={1}
      >
        {desc2}
      </Container>
    </Box>
  </Flex>
);

export default BannerSMlight;
