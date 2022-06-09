// ------------------ HOME PAGE -------------------

//------------ IMPORT COMPONENTS ----------------------
import Header from "../components/Header/Header";
import Whatwedo from "../components/Whatwedo/Whatwedo";
import Sponsors from "../components/Sponsors/Sponsors";
import Getintouch from "../components/Getintouch/Getintouch";
import CarouselHeader from "../components/Carousel/CarouselHeader";
import Paidcontent from "../components/Paidcontent/Paidcontent";
import Startbrand from "../components/Startbrand/Startbrand";
import Offers from "../components/Offers/Offers";

//-------------- BROWSER  -----------

export default function Home() {
  return (
    <>
      {/* ----------- HEADER SECTION -----------*/}
      <Header />

      {/* ----------- CAROUSEL SECTION  -----------*/}

      <CarouselHeader />

      {/* ----------- WHAT WE DO SECTION -----------*/}

      <Whatwedo />

      {/* ----------- SPONSORS SECTION  -----------*/}

      <Sponsors />

      {/* ----------- OFFERS SECTION ----------*/}
      <Offers />

      {/* ----------- PAID CONTENT SECTION ----------*/}
      <Paidcontent />

      {/* ----------- GET IN TOUCH FORM SECTION ----------*/}
      <Getintouch />

      {/* ----------- START A BRAND SECTION ----------*/}
      <Startbrand />

      {/* ----------- GET IN TOUCH FORM SECTION ----------*/}
      <Getintouch />
    </>
  );
}
