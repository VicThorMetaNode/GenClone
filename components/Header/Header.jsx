// Import CHAKRA tools
import { Box, Flex, Container, Text } from "@chakra-ui/react";

//-------------- Import Internal Const for chakra ui

const BannerSM = ({ title, desc1 }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box mb={4} p={8}>
      <Text
        textAlign="center"
        className="title-span"
        fontSize="2rem"
        textTransform="uppercase"
        fontWeight="400"
        pb={2}
        mb={2}
        color="#fff"
      >
        {" "}
        {title}
      </Text>

      <Container
        textAlign="center"
        className="text-container"
        fontSize="1.1rem"
        fontWeight="100"
        color="#fff"
        pb={4}
        mt={2}
      >
        {desc1}
      </Container>
    </Box>
  </Flex>
);

//-------------- BROWSER  -----------

const Header = () => {
  return (
    <>
      <Box mt={8}>
        <Text
          textAlign="center"
          className="main-title"
          fontSize="2.8rem"
          textTransform="uppercase"
          fontWeight="400"
          color="#fff"
        >
          We Help <span className="creator-main-title">creators</span>{" "}
          <span className="monetize-main-title">monetize</span> their audiences
        </Text>
      </Box>

      <Box>
        <BannerSM
          desc1="We are a leading, all-in-one platform for creators.
          We have been helping your favorite creators turn their passion into successful businesses since 2016.
          We believe having an audience is the most valuable asset in the world."
        />
      </Box>
    </>
  );
};

export default Header;
