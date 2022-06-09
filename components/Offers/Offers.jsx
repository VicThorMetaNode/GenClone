// Import CHAKRA tools
import { Box, List, ListItem } from "@chakra-ui/react";

//-------------- Import Internal Const for chakra ui

const Bulletpoint = ({ desc1, desc2, desc3, desc4, desc5, desc6 }) => {
  // const { ref: myRef1, inView: myParallaxdesc1 } = useInView();
  // const { ref: myRef2, inView: myParallaxdesc2 } = useInView();
  // const { ref: myRef3, inView: myParallaxdesc3 } = useInView();
  // const { ref: myRef4, inView: myParallaxdesc4 } = useInView();
  // const { ref: myRef5, inView: myParallaxdesc5 } = useInView();

  return (
    <Box mb={4} p={8}>
      <List>
        <ListItem
          textAlign="Left"
          className="text-container"
          fontSize="1.1rem"
          fontWeight="100"
          color="#fff"
          p={2}
          mb={4}
          boxShadow=" -1px 0px  0px 0px #302e2edf"
        >
          {desc1}
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
        >
          {desc2}{" "}
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
        >
          {desc3}
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
        >
          {desc4}{" "}
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
        >
          {desc5}{" "}
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
