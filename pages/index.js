// ------------------ HOME PAGE -------------------
//IMPORT REACT COMPONENTS
import React, { useEffect } from 'react'

import "../styles/Home.module.css";

//IMPORT RELLAX
import Rellax from 'rellax'




//------------ IMPORT COMPONENTS ----------------------
import Header from "../components/Header/Header";
import Whatwedo from "../components/Whatwedo/Whatwedo";
import Sponsors from "../components/Sponsors/Sponsors";
import Offers from "../components/Offers/Offers";
import Getintouch from "../components/Getintouch/Getintouch";
import Paidcontent from "../components/PaidContent/Paidcontent";
import Startbrand from "../components/Startbrand/Startbrand";
import CarouselHeader from "../components/Carousel/CarouselHeader";




//-------------- BROWSER  -----------

export default function Home() {
  useEffect(() => {
    new Rellax(".rellax", { 
    });
  
    }, []);
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
