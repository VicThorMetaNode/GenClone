import React from "react";

//-------------- Import CHAKRA tools
import {
  Icon,
  Grid,
  GridItem,
  Box,
  Flex,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";

//-------------- Import ICONS
import {
  BiLaptop,
  BiSupport,
  BiTrip,
  BiWrench,
  BiTrendingUp,
  BiStore,
} from "react-icons/bi";

//Import Icons
import { VscTriangleDown } from "react-icons/vsc";

//-------------- Import Internal Const for chakra ui

const BannerSMgrey = ({ title, title2, desc1, desc2 }) => (
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

//-------------- BROWSER  -----------

const Startbrand = () => {
  return (
    <>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        bg="#f1f1f1"
      >
        <Box>
          <BannerSMgrey
            title="START YOUR OWN BRAND"
            desc1="Create and sell your own products"
          />
        </Box>
      </Flex>

      <Grid bg="#f1f1f1" templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <VStack>
            <Box justifyContent="center" alignItems="center">
              <Icon as={BiStore} boxSize="4rem" color="#000000" />
            </Box>
            <Box>
              <BannerSMgrey
                title2="BRANDING"
                desc2="We will work with you to define your brand's visual identity"
              />
            </Box>
          </VStack>
        </GridItem>

        <GridItem colSpan={2}>
          <VStack>
            <Box justifyContent="center" alignItems="center">
              <Icon as={BiLaptop} boxSize="4rem" color="#000000" />
            </Box>
            <Box>
              <BannerSMgrey
                title2="WEBSITE"
                desc2="We will design a custom-made e-commerce store to convert your followers into customers"
              />
            </Box>
          </VStack>
        </GridItem>

        <GridItem colSpan={2}>
          <VStack>
            <Box justifyContent="center" alignItems="center">
              <Icon as={BiWrench} boxSize="4rem" color="#000000" />
            </Box>
            <Box>
              <BannerSMgrey
                title2="MANUFACTURING"
                desc2="We work with over 100+ factories, globally to make the best quality products in the industry"
              />
            </Box>
          </VStack>
        </GridItem>

        <GridItem colSpan={2}>
          <VStack>
            <Box justifyContent="center" alignItems="center">
              <Icon as={BiTrip} boxSize="4rem" color="#000000" />
            </Box>
            <Box>
              <BannerSMgrey
                title2="FULFILLMENT"
                desc2="We have worldwide distribution across UK, Europe and USA"
              />
            </Box>
          </VStack>
        </GridItem>

        <GridItem colSpan={2}>
          <VStack>
            <Box justifyContent="center" alignItems="center">
              <Icon as={BiSupport} boxSize="4rem" color="#000000" />
            </Box>
            <Box>
              <BannerSMgrey
                title2="CUSTOMER SERVICE"
                desc2="We offer 24-hour customer service to make sure every customer is happy"
              />
            </Box>
          </VStack>
        </GridItem>

        <GridItem colSpan={2}>
          <VStack>
            <Box justifyContent="center" alignItems="center">
              <Icon as={BiTrendingUp} boxSize="4rem" color="#000000" />
            </Box>
            <Box>
              <BannerSMgrey
                title2="STRATEGY"
                desc2="We have a team of experts to build the brand you always dreamed of"
              />
            </Box>
          </VStack>
        </GridItem>
      </Grid>
      <Flex justifyContent="center" alignItems="center" p={0} m={-6}>
        <Icon as={VscTriangleDown} boxSize="4rem" color="#f1f1f1" />
      </Flex>
    </>
  );
};

export default Startbrand;
