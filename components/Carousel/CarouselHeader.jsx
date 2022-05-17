import React, { useRef, useState } from "react";

// Import SWIPER
import { Swiper, SwiperSlide } from "swiper/react";

// Import SWIPER styles
import "swiper/css";

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
  Image,
  HStack,
  Stack,
} from "@chakra-ui/react";

//-------------- BROWSER  -----------

const CarouselHeader = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="400px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc37f8ef2a933b4a54023_1.%20LOGAN%20PAUL-p-800.jpeg"
              alt="People Picture"
              borderRadius="25px"
            />
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Box pos="fixed" bottom={10} mb={10}>
                <Container
                  className="title-span"
                  textTransform="uppercase"
                  fontWeight="400"
                  letterSpacing="2px"
                  fontSize="1rem"
                >
                  Logan Paul
                </Container>
              </Box>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                spacing="0.50rem"
                pos="fixed"
                bottom={6}
                mb={7}
              >
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506bf2bab0651bf30e7c_Instagram.svg"
                      alt="Insta Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      22.3M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506b5ab47ce0e9ccf96f_Youtube.svg"
                      alt="Youtube Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      23.4M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/61ad0dea4a9a630f52911bbf_tiktok.svg"
                      alt="Tik Tok Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      14M
                    </Text>
                  </HStack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="400px"
              borderRadius="25px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc37c02b2b95b1ef554f5_16.%20LISA%20%26%20ROMANE-p-500.jpeg"
              alt="People Picture"
            />
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Box pos="fixed" bottom={10} mb={10}>
                <Container
                  className="title-span"
                  textTransform="uppercase"
                  fontWeight="400"
                  letterSpacing="2px"
                  fontSize="1rem"
                >
                  Romane & Lisa Lanceford
                </Container>
              </Box>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                spacing="0.50rem"
                pos="fixed"
                bottom={6}
                mb={7}
              >
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506bf2bab0651bf30e7c_Instagram.svg"
                      alt="Insta Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      2.7M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506b5ab47ce0e9ccf96f_Youtube.svg"
                      alt="Youtube Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      71.8K
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/61ad0dea4a9a630f52911bbf_tiktok.svg"
                      alt="Tik Tok Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      474K
                    </Text>
                  </HStack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="400px"
              borderRadius="25px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc37ac96d4d6d3b024691_3.%20MATT%20MORSIA-p-500.jpeg"
              alt="People Picture"
            />
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Box pos="fixed" bottom={10} mb={10}>
                <Container
                  className="title-span"
                  textTransform="uppercase"
                  fontWeight="400"
                  letterSpacing="2px"
                  fontSize="1rem"
                >
                  Matt Morsia
                </Container>
              </Box>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                spacing="0.50rem"
                pos="fixed"
                bottom={6}
                mb={7}
              >
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506bf2bab0651bf30e7c_Instagram.svg"
                      alt="Insta Logo"
                    />
                    <Text className="text-container" fontSize="12px">
                      1M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506b5ab47ce0e9ccf96f_Youtube.svg"
                      alt="Youtube Logo"
                    />
                    <Text className="text-container" fontSize="12px">
                      2.12M
                    </Text>
                  </HStack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="400px"
              borderRadius="25px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc3792ee80d50a3cd5c21_4.%20KELSEY%20CALEMINE-1-p-500.jpeg"
              alt="People Picture"
            />
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Box pos="fixed" bottom={10} mb={10}>
                <Container
                  className="title-span"
                  textTransform="uppercase"
                  fontWeight="400"
                  letterSpacing="2px"
                  fontSize="1rem"
                >
                  Fatherkels
                </Container>
              </Box>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                spacing="0.50rem"
                pos="fixed"
                bottom={6}
                mb={7}
              >
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506bf2bab0651bf30e7c_Instagram.svg"
                      alt="Insta Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      2.8M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506b5ab47ce0e9ccf96f_Youtube.svg"
                      alt="Youtube Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      50K
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/61ad0dea4a9a630f52911bbf_tiktok.svg"
                      alt="Tik Tok Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      284K
                    </Text>
                  </HStack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="400px"
              borderRadius="25px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc36b6af62cc633fee0bd_5.%20LILLY%20SABRI-p-500.jpeg"
              alt="People Picture"
            />
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Box pos="fixed" bottom={10} mb={10}>
                <Container
                  className="title-span"
                  textTransform="uppercase"
                  fontWeight="400"
                  letterSpacing="2px"
                  fontSize="1rem"
                >
                  Lilly Sabri
                </Container>
              </Box>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                spacing="0.50rem"
                pos="fixed"
                bottom={6}
                mb={7}
              >
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506bf2bab0651bf30e7c_Instagram.svg"
                      alt="Insta Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      698K
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/6208506b5ab47ce0e9ccf96f_Youtube.svg"
                      alt="Youtube Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      3.34M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      boxSize="13px"
                      objectFit="cover"
                      src="https://assets.website-files.com/619c469f911ac333e104d701/61ad0dea4a9a630f52911bbf_tiktok.svg"
                      alt="Tik Tok Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      40K
                    </Text>
                  </HStack>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselHeader;
