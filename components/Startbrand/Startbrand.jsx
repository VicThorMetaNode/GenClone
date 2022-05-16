import React from "react";

//-------------- Import CHAKRA tools
import {
  Icon,
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
  Stack,
  VStack,
  HStack,
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

//-------------- Import Internal Const for chakra ui

import BannerSMgrey from "../../utilities/Const/bannerSMgrey";

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

      <HStack bg="#f1f1f1">
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
      </HStack>

      <HStack bg="#f1f1f1">
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
      </HStack>

      <HStack bg="#f1f1f1">
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
      </HStack>
    </>
  );
};

export default Startbrand;
