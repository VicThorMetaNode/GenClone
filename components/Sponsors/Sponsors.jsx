import Image from "next/image";

// Import CHAKRA tools
import { Stack, Box, Flex, Text } from "@chakra-ui/react";

//-------------- Import Internal Const for chakra ui

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

//Import images
import tc from "../../utilities/images/tc-logo.svg";
import forbes from "../../utilities/images/forbes-logo.svg";
import tuber from "../../utilities/images/tubefilter.svg";

//-------------- BROWSER  -----------

const Sponsors = () => {
  return (
    <>
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
    </>
  );
};

export default Sponsors;
