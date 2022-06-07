// Import CHAKRA tools
import { Box } from "@chakra-ui/react";

//-------------- Import Internal Const for chakra ui

import BannerSM from "../../utilities/Const/bannerSM";

//-------------- BROWSER  -----------

const Whatwedo = () => {
  return (
    <>
      <Box>
        <BannerSM
          title="WHAT WE DO"
          desc1="Genflow provides complete 360 experience to enable creators to grow their audiences, launch their own businesses, deliver brand partnerships and unlock their true potential."
        />
      </Box>
    </>
  );
};

export default Whatwedo;
