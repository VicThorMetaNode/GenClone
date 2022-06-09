//Import Next special Link
import NextLink from "next/link";

// Import CHAKRA tools
import { Box, Flex, HStack, Link, Text, Spacer, Icon } from "@chakra-ui/react";

//Import Logo
import { DiGithubAlt } from "react-icons/di";
import { FaRegIdCard } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ImLab } from "react-icons/im";

const HeadTroduction = () => {
  return (
    <>
      <Flex bg="#1e1e20" w="100%" p="1rem">
        <Box>
          <Text className="intro-content">
            This website is fully built in <b>NextJS</b> using <b>Chakra Ui</b>,{" "}
            <b>Swiper</b>, <b>FormSpree</b>, <b>React-Icon</b>,<b>and more</b>.
            Clone
            <NextLink
              href="https://genflow.com/"
              target="_blank"
              rel="GenFlow"
              passHref
              className="GenFlow-link"
            >
              <Link color="#e6ca6f" className="GenFlow-link">
                {" "}
                GenFlow{" "}
              </Link>
            </NextLink>
            website.
          </Text>
        </Box>
        <Spacer />
        <Box>
          <HStack>
            <Box>
              <NextLink
                href="https://github.com/VicThorMetaNode"
                rel="GitHub"
                passHref
              >
                <Link isExternal>
                  <Icon color="#01dac1" w={6} h={6} as={DiGithubAlt} />
                </Link>
              </NextLink>
            </Box>
            <Box>
              <NextLink
                href="https://welovedevs.com/app/developer/victor-php-and-react-developer-passionne-de-web-dev"
                target="_blank"
                rel="WeLoveWebDev"
                passHref
              >
                <Link isExternal>
                  <Icon color="#01dac1" w={4} h={4} as={FaRegIdCard} />
                </Link>
              </NextLink>
            </Box>
            <Box>
              <NextLink
                href="https://www.linkedin.com/in/vic-thor-6aa023100/"
                rel="Linkedin"
                passHref
              >
                <Link isExternal>
                  <Icon color="#01dac1" w={5} h={5} as={AiOutlineLinkedin} />
                </Link>
              </NextLink>
            </Box>
            <Box>
              <NextLink href="https://gitlab.com/tecnam" rel="GitLab" passHref>
                <Link isExternal>
                  <Icon color="#01dac1" w={4} h={4} as={ImLab} />
                </Link>
              </NextLink>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default HeadTroduction;
