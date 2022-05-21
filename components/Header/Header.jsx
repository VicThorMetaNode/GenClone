// Import REACT & NEXT tools
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

//-------------- Import Internal Const for chakra ui

import BannerSM from "../../utilities/Const/bannerSM";

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
