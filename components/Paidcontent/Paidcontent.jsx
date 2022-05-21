import React from "react";

//Import Parallax Animation
import { useInView } from "react-intersection-observer";

import styles from "../../styles/Home.module.css";

// Import CHAKRA tools
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
  Image,
} from "@chakra-ui/react";

//Import Icons
import { VscTriangleDown } from "react-icons/vsc";

//-------------- Import Internal Const for chakra ui

import BannerPC from "../../utilities/Const/bannerPc";
import BannerSMlight from "../../utilities/Const/bannerSMlight";

//-------------- BROWSER  -----------

const Paidcontent = () => {
  const { ref: refBtnViewMore, inView: myParallaxBtnViewMore } = useInView();
  return (
    <>
      <Box bg="#fff" pb={6}>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <BannerSMlight
            title="DIGITAL PRODUCTS"
            desc1="Start your own membership club. Sell guides, courses and build your community"
            desc2="Genflow's platform allows every creator to sell anything digitally to their audience. We are experts in building the best bespoke experiences."
          />
        </Flex>
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          bg="#fff"
          pb={6}
        >
          <Box mb={4} p={8} bg="#fff" color="#000000" boxShadow="md">
            <BannerPC
              title="Mobile Apps"
              desc1="Create apps that top the charts"
            />
            <Image
              boxSize="400px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/61e6e63773ac14c7f6a3eea4_APPS-V2-p-500.jpeg"
              alt="Paid Content Image"
              p="0"
              m="0"
            />
          </Box>
          <Box mb={4} p={8} bg="#000000" color=" #fff">
            <BannerPC
              title="PAID CONTENT"
              desc1="Create and sell premium content"
            />
            <Image
              boxSize="400px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/61e6bec12820382ff855e88e_CONTENT-p-500.jpeg"
              alt="Paid Content Image"
              p="0"
              m="0"
            />
          </Box>
          <Box mb={4} p={8} bg="#fff" color="#000000">
            <BannerPC
              title="FITNESS GUIDES"
              desc1="Curate your own workout guides"
            />
            <Image
              boxSize="400px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/621fcc4a47e7fd51d0a6b968_WORKOUTS-2-p-500.jpeg"
              alt="Paid Content Image"
              p="0"
              m="0"
            />
          </Box>
          <Box mb={4} p={8} bg="#fff" color="#000000">
            <BannerPC title="COURSES" desc1="Mentor your audience" />
            <Image
              boxSize="400px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/621fcc4b292e190b658168b7_COURSES-p-500.jpeg"
              alt="Paid Content Image"
              p="0"
              m="0"
            />
          </Box>
          <Box mb={4} p={8} bg="#000000" color=" #fff">
            <BannerPC
              title="MEMBERSHIP CLUBS"
              desc1="Custom-made for your audience"
            />
            <Image
              boxSize="400px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/61e6c019287dc085b6e4a22b_MEMBERSHIP%20CLUB-p-500.jpeg"
              alt="Paid Content Image"
              p="0"
              m="0"
            />
          </Box>
          <Box mb={4} p={8} bg="#fff" color="#000000" boxShadow="md">
            <BannerPC title="COACHING" desc1="Partner with your audience" />
            <Image
              boxSize="400px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/61e6c026514743d2c237a7d2_AFLETE-p-500.jpeg"
              alt="Paid Content Image"
              p="0"
              m="0"
            />
          </Box>
        </Flex>

        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          pb={6}
          ref={refBtnViewMore}
        >
          <Button
            backgroundColor="#ebd385"
            border="2px solid #ebd385"
            borderRadius="0.70rem"
            textTransform="uppercase"
            fontWeight="100"
            color="#000000"
            fontSize="1rem"
            className={`${
              myParallaxBtnViewMore ? styles.animateMyBtnViewMore : ""
            } ${"text-container"}`}
            p={4}
            mb={6}
            _hover={{ bg: "#e6ca6f" }}
          >
            View More
          </Button>
        </Flex>
      </Box>
      <Flex justifyContent="center" alignItems="center" p={0} m={-6}>
        <Icon as={VscTriangleDown} boxSize="4rem" />
      </Flex>
    </>
  );
};

export default Paidcontent;
