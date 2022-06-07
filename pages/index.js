// ------------------ HOME PAGE -------------------
import dynamic from "next/dynamic";
//IMPORT REACT COMPONENTS
import React, { useEffect } from 'react'

import "../styles/Home.module.css";

//IMPORT RELLAX
import Rellax from 'rellax'




//------------ IMPORT COMPONENTS ----------------------
const Header = dynamic(() => import("../components/Header/Header"));
const Getintouch  = dynamic(() => import("../components/Getintouch/Getintouch"));
const CarouselHeader  = dynamic(() => import("../components/Carousel/CarouselHeader"));
import Whatwedo from "../components/Whatwedo/Whatwedo";
import Sponsors from "../components/Sponsors/Sponsors";
import Offers from "../components/Offers/Offers";
import Paidcontent from "../components/PaidContent/Paidcontent";
import Startbrand from "../components/Startbrand/Startbrand";





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
