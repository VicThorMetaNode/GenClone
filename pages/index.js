// ------------------ HOME PAGE -------------------

//------------ IMPORT ----------------------

// Import REACT & NEXT tools
import React from "react";
import NextLink from "next/link";
import Image from "next/image";

//import Framer Motion
import { motion } from "framer-motion";

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

// Import CHAKRA icons
import {} from "@chakra-ui/icons";
// Import CHAKRA Third Party icons
import {} from "react-icons/md";

//------------ IMPORT COMPONENTS ----------------------
import Header from "../components/Header/Header";
import Whatwedo from "../components/WhatWeDo/Whatwedo";
import Sponsors from "../components/Sponsors/Sponsors";
import Offers from "../components/Offers/Offers";
import Getintouch from "../components/Getintouch/Getintouch";
import Paidcontent from "../components/PaidContent/Paidcontent";
import Startbrand from "../components/Startbrand/Startbrand";

import CarouselHeader from "../components/Carousel/CarouselHeader";


//-------------- BROWSER  -----------

export default function Home() {
  return (
    <>
      
        <Header />
        <CarouselHeader />
        <Whatwedo />
        <Sponsors />
        <Offers />
        <Paidcontent />
        <Getintouch />
        <Startbrand />
        <Getintouch />

        
      
    </>
  );
}