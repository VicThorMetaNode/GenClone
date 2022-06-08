// Import CHAKRA tools
import { Box, Text, Flex } from "@chakra-ui/react";

const BannerXStitle = ({ title }) => {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box mb={1} p={2}>
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
            {title}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default BannerXStitle;
