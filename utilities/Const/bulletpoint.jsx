import { useRef, useEffect, useState } from "react";

import styles from "../../styles/Home.module.css";

//Import Parallax Animation
import { useInView } from "react-intersection-observer";

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

const Bulletpoint = ({ desc1, desc2, desc3, desc4, desc5, desc6 }) => {
  const { ref: myRef1, inView: myParallaxdesc1 } = useInView();
  const { ref: myRef2, inView: myParallaxdesc2 } = useInView();
  const { ref: myRef3, inView: myParallaxdesc3 } = useInView();
  const { ref: myRef4, inView: myParallaxdesc4 } = useInView();
  const { ref: myRef5, inView: myParallaxdesc5 } = useInView();

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
          ref={myRef1}
        >
          <span className={`${myParallaxdesc1 ? styles.animateMyDesc1 : ""}`}>
            {desc1}{" "}
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
          {desc2}
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
          ref={myRef4}
        >
          {desc4}
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
          {desc5}
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

export default Bulletpoint;
