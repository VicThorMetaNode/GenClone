// Import CHAKRA tools
import { Box, Container, Text, Flex } from "@chakra-ui/react";

const BannerSMlight = ({ title, desc1, desc2 }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box p={8} bg="#fff" color="#000000">
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
      <Container
        textAlign="center"
        className="text-container"
        fontSize="1.2rem"
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
        pb={4}
        mt={2}
      >
        {desc2}
      </Container>
    </Box>
  </Flex>
);

export default BannerSMlight;
