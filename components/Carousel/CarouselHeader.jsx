import Image from "next/image";
// Import SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// Import SWIPER styles
import "swiper/css";

// Import CHAKRA tools
import { Box, Container, Text, Flex, Stack, HStack } from "@chakra-ui/react";

//import people images
import loganpaul from "../../utilities/images/loganpaul.jpeg";
import lisa from "../../utilities/images/lisa.jpeg";
import matt from "../../utilities/images/matt.jpeg";
import kelsey from "../../utilities/images/kelsey.jpeg";
import lilly from "../../utilities/images/lilly.jpeg";

//import logo images
import instagram from "../../utilities/images/instagram.svg";
import youtube from "../../utilities/images/youtube.svg";
import tiktok from "../../utilities/images/tiktok.svg";
//-------------- BROWSER  -----------

const CarouselHeader = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        loop={true}
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box p={2}>
            <Image
              width="400px"
              height="600px"
              objectFit="cover"
              src={loganpaul}
              alt="People Picture"
              className="img-swiper"
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
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing="0.50rem"
                pos="fixed"
                bottom={6}
                mb={7}
              >
                <Box>
                  <HStack>
                    <Image
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={instagram}
                      alt="Instagram Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      22.3M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={youtube}
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
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={tiktok}
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
              width="400px"
              height="600px"
              objectFit="cover"
              src={lisa}
              alt="People Picture"
              className="img-swiper"
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
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={instagram}
                      alt="Instagram Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      2.7M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={youtube}
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
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={tiktok}
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
              width="400px"
              height="600px"
              objectFit="cover"
              src={matt}
              alt="People Picture"
              className="img-swiper"
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
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={instagram}
                      alt="Instagram Logo"
                    />
                    <Text className="text-container" fontSize="12px">
                      1M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={youtube}
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
              width="400px"
              height="600px"
              objectFit="cover"
              src={kelsey}
              alt="People Picture"
              className="img-swiper"
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
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={instagram}
                      alt="Instagam Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      2.8M
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={youtube}
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
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={tiktok}
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
              width="400px"
              height="600px"
              objectFit="cover"
              src={lilly}
              alt="People Picture"
              className="img-swiper"
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
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={instagram}
                      alt="Instagram Logo"
                    />
                    <Text className="text-container" fontSize="10px">
                      698K
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    <Image
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={youtube}
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
                      width="13px"
                      height="13px"
                      objectFit="cover"
                      src={tiktok}
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
