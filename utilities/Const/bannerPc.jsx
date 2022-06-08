// Import CHAKRA tools
import { Container, Text } from "@chakra-ui/react";

const BannerPC = ({ title, desc1 }) => {
  return (
    <>
      <Text
        textAlign="center"
        className="title-span"
        fontSize="2rem"
        textTransform="uppercase"
        fontWeight="600"
        pb={2}
        mb={2}
      >
        {title}
      </Text>
      <Container
        textAlign="center"
        className="text-container"
        fontSize="1.1rem"
        fontWeight="100"
        pb={4}
        mt={2}
      >
        {desc1}
      </Container>
    </>
  );
};

export default BannerPC;
