import React from "react";

// Import CHAKRA tools
import {
  Title,
  Image,
  Center,
  Stack,
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

import BannerXStitle from "../../utilities/Const/BannerXStitle";

//-------------- BROWSER  -----------

const Sponsors = () => {
  return (
    <>
      <Box>
        <BannerXStitle title="as featured in" />
      </Box>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" spaceBe>
        <Stack direction="row">
          <Image
            boxSize="120px"
            src="https://assets.website-files.com/619c469f911ac333e104d701/62083e70eb4d1cb85246de05_TC-logo.svg"
            alt="TechCrunch Logo"
            mr={2}
            ml={4}
          />
          <Image
            boxSize="120px"
            src="https://assets.website-files.com/619c469f911ac333e104d701/6207a4afc4b72f745f67d803_Forbes%20logo.svg"
            alt="Forbes Logo"
            ml={2}
          />
          <Image
            boxSize="120px"
            src="https://assets.website-files.com/619c469f911ac333e104d701/6207a49a0150ac70c27371ba_tubefilter.svg"
            alt="tuberfilter"
            ml={2}
            mr={1}
          />
        </Stack>
      </Flex>
    </>
  );
};

export default Sponsors;
