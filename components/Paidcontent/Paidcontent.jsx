import Image from "next/image";

// Import CHAKRA tools
import { Icon, Box, Flex, Button } from "@chakra-ui/react";

//Import Icons
import { VscTriangleDown } from "react-icons/vsc";

//-------------- Import Internal Const for chakra ui

import BannerPC from "../../utilities/Const/bannerPc";
import BannerSMlight from "../../utilities/Const/bannerSMlight";

//import pictures
import mobile from "../../utilities/images/mobileapps.jpeg";
import paid from "../../utilities/images/paidcontent.jpeg";
import fitness from "../../utilities/images/fitnessguides.jpeg";
import courses from "../../utilities/images/courses.jpeg";
import membership from "../../utilities/images/membership.jpeg";
import coaching from "../../utilities/images/coaching.jpeg";

//-------------- BROWSER  -----------

const Paidcontent = () => {
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
              width="500px"
              height="370px"
              objectFit="cover"
              src={mobile}
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
              width="500px"
              height="370px"
              objectFit="cover"
              src={paid}
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
              width="500px"
              height="370px"
              objectFit="cover"
              src={fitness}
              alt="Paid Content Image"
              p="0"
              m="0"
            />
          </Box>
          <Box mb={4} p={8} bg="#fff" color="#000000">
            <BannerPC title="COURSES" desc1="Mentor your audience" />
            <Image
              width="500px"
              height="370px"
              objectFit="cover"
              src={courses}
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
              width="500px"
              height="370px"
              objectFit="cover"
              src={membership}
              alt="Paid Content Image"
              p="0"
              m="0"
            />
          </Box>
          <Box mb={4} p={8} bg="#fff" color="#000000" boxShadow="md">
            <BannerPC title="COACHING" desc1="Partner with your audience" />
            <Image
              width="500px"
              height="370px"
              objectFit="cover"
              src={coaching}
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
          // ref={refBtnViewMore}
        >
          <Button
            backgroundColor="#ebd385"
            border="2px solid #ebd385"
            borderRadius="0.70rem"
            textTransform="uppercase"
            fontWeight="100"
            color="#000000"
            fontSize="1rem"
            className="text-container"
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
