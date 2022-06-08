// Import CHAKRA tools
import { Box } from "@chakra-ui/react";

//-------------- Import Internal Const for chakra ui

import BulletPoint from "../../utilities/Const/bulletpoint";

//-------------- BROWSER  -----------

const Offers = () => {
  return (
    <>
      <Box>
        <BulletPoint
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
