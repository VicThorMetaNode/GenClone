import React from "react";
//Import NPM package to animate text using 'inView'
import { useInView } from "react-intersection-observer";
// Import CHAKRA tools
import { Box, List, ListItem } from "@chakra-ui/react";

//-------------- Import Internal Const for chakra ui

const Bulletpoint = ({ desc1, desc2, desc3, desc4, desc5, desc6 }) => {
  //initialize useInView package to animate texts
  const { ref: myRef, inView: myRefIsVisible } = useInView();
  const { ref: myRef2, inView: myRefIsVisible2 } = useInView();
  const { ref: myRef3, inView: myRefIsVisible3 } = useInView();
  const { ref: myRef4, inView: myRefIsVisible4 } = useInView();
  const { ref: myRef5, inView: myRefIsVisible5 } = useInView();

  return (
    <Box mb={4} p={8}>
      <List>
        <ListItem
          textAlign="Left"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          mb={4}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          ref={myRef}
          className="text-container"
        >
          <span className={`${myRefIsVisible ? "animateMyDesc1" : ""}`}>
            {desc1}
          </span>
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          mb={4}
          mt={6}
          ref={myRef2}
        >
          <span className={`${myRefIsVisible2 ? "animateMyDesc1" : ""}`}>
            {desc2}
          </span>
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          mb={4}
          mt={6}
          ref={myRef3}
        >
          <span className={`${myRefIsVisible3 ? "animateMyDesc1" : ""}`}>
            {desc3}
          </span>
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          mb={4}
          mt={6}
          ref={myRef4}
        >
          <span className={`${myRefIsVisible4 ? "animateMyDesc1" : ""}`}>
            {desc4}
          </span>
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
          mb={4}
          mt={6}
          ref={myRef5}
        >
          <span className={`${myRefIsVisible5 ? "animateMyDesc1" : ""}`}>
            {desc5}
          </span>
        </ListItem>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
        >
          {desc6}
        </ListItem>
      </List>
    </Box>
  );
};

//-------------- BROWSER  -----------

const Offers = () => {
  return (
    <>
      <Box>
        <Bulletpoint
          desc1="Sell content, memberships and create your own platforms"
          desc2="Product design, manufacturing, and fulfillment"
          desc3="Talent management, brand deals and sponsorships"
          desc4="Social media, content planning and campaign management"
          desc5="Team of business experts to help scale your creator business"
        />
      </Box>
    </>
  );
};

export default Offers;
