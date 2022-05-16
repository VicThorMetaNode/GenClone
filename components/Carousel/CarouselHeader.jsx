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
        {/* <SwiperSlide>
          <Box
            p={2}
            className="logan"
            alt="People Picture"
            boxSize="600px"
            objectFit="cover"
          >
            <Box pos="fixed" bgColor="#FFD3F8" bottom={2}>
              <Text>Logan Paul</Text>
            </Box>
          </Box>
        </SwiperSlide> */}

        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="600px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc37f8ef2a933b4a54023_1.%20LOGAN%20PAUL-p-800.jpeg"
              alt="People Picture"
            />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="600px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc37c02b2b95b1ef554f5_16.%20LISA%20%26%20ROMANE-p-500.jpeg"
              alt="People Picture"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="600px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc37ac96d4d6d3b024691_3.%20MATT%20MORSIA-p-500.jpeg"
              alt="People Picture"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="600px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc3792ee80d50a3cd5c21_4.%20KELSEY%20CALEMINE-1-p-500.jpeg"
              alt="People Picture"
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box p={2}>
            <Image
              boxSize="600px"
              objectFit="cover"
              src="https://assets.website-files.com/619c469f911ac333e104d701/620bc36b6af62cc633fee0bd_5.%20LILLY%20SABRI-p-500.jpeg"
              alt="People Picture"
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselHeader;
