import React from "react";

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

const Bulletpoint = ({ desc1, desc2, desc3, desc4, desc5, desc6 }) => (
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
        boxShadow=" -1px 0px  0px #746f6fdf"
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
        boxShadow=" -1px 0px  0px #746f6fdf"
        mb={4}
        mt={6}
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
        boxShadow=" -1px 0px  0px #746f6fdf"
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
        boxShadow=" -1px 0px  0px #746f6fdf"
        mb={4}
        mt={6}
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
        boxShadow=" -1px 0px  0px #746f6fdf"
        mb={4}
        mt={6}
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

export default Bulletpoint;
