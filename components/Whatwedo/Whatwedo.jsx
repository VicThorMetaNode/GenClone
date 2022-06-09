// Import CHAKRA tools
import { Box, Container, Text, Flex } from "@chakra-ui/react";

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

const Whatwedo = () => {
  return (
    <>
      <Box>
        <BannerSM
          title="WHAT WE DO"
          desc1="Genflow provides complete 360 experience to enable creators to grow their audiences, launch their own businesses, deliver brand partnerships and unlock their true potential."
        />
      </Box>
    </>
  );
};

export default Whatwedo;
