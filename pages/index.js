// ------------------ HOME PAGE -------------------
import dynamic from "next/dynamic";

import "../styles/Home.module.css";

import Image from "next/image";

// Import CHAKRA tools
import {
  Box,
  Flex,
  Text,
  Container,
  Stack,
  List,
  ListItem,
} from "@chakra-ui/react";

//------------ IMPORT COMPONENTS ----------------------

import Getintouch from "../components/Getintouch/Getintouch";
import CarouselHeader from "../components/Carousel/CarouselHeader";
import Paidcontent from "../components/PaidContent/Paidcontent";
import Startbrand from "../components/Startbrand/Startbrand";

//Import images
import tc from "../utilities/images/tc-logo.svg";
import forbes from "../utilities/images/forbes-logo.svg";
import tuber from "../utilities/images/tubefilter.svg";

//Const Components
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

const Bulletpoint = ({ desc1, desc2, desc3, desc4, desc5, desc6 }) => {
  return (
    <Box mb={4} p={8}>
      <List>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          mb={4}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
        >
          {desc1}
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          mb={4}
          mt={6}
        >
          {desc2}{" "}
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          mb={4}
          mt={6}
        >
          {desc3}{" "}
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          mb={4}
          mt={6}
        >
          {desc4}{" "}
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          mb={4}
          mt={6}
        >
          {desc5}{" "}
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
        >
          {desc6}
        </ListItem>
      </List>
    </Box>
  );
};

//-------------- BROWSER  -----------

export default function Home() {
  return (
    <>
      {/* ----------- HEADER -----------*/}
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

      {/* ----------- CAROUSEL  -----------*/}

      <CarouselHeader />

      {/* ----------- WHAT WE DO -----------*/}

      <Box>
        <BannerSM
          title="WHAT WE DO"
          desc1="Genflow provides complete 360 experience to enable creators to grow their audiences, launch their own businesses, deliver brand partnerships and unlock their true potential."
        />
      </Box>

      {/* ----------- SPONSORS-----------*/}

      <Box mb={[10, 20, 20]}>
        <Box>
          <BannerXStitle title="as featured in" />
        </Box>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Stack direction="row">
            <Box>
              <Image
                width="150px"
                height="20px"
                objectFit="fill"
                src={tc}
                alt="TechCrunch Logo"
                mr={2}
                ml={4}
              />
            </Box>
            <Box>
              <Image
                width="150px"
                height="20px"
                objectFit="fill"
                src={forbes}
                alt="Forbes Logo"
                ml={2}
              />
            </Box>
            <Box>
              <Image
                width="150px"
                height="20px"
                objectFit="fill"
                src={tuber}
                alt="Tuber logo"
                ml={2}
                mr={1}
              />
            </Box>
          </Stack>
        </Flex>
      </Box>

      {/* ----------- OFFERS ----------*/}
      <Box>
        <Bulletpoint
          desc1="Sell content, memberships and create your own platforms"
          desc2="Product design, manufacturing, and fulfillment"
          desc3="Talent management, brand deals and sponsorships"
          desc4="Social media, content planning and campaign management"
          desc5="Team of business experts to help scale your creator business"
        />
      </Box>

      <Paidcontent />
      <Getintouch />

      <Startbrand />
      <Getintouch />
    </>
  );
}
