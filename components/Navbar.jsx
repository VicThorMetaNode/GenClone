import React from "react";

// Import CHAKRA tools
import {
  Spacer,
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
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";

//-------------- Import ICONS
import { GoThreeBars } from "react-icons/go";

//-------------- BROWSER  -----------
const Navbar = () => {
  return (
    <>
      <Flex>
        <Box pl={2}>
          <Text
            pl="4"
            pt="3"
            className="genclone-title"
            fontSize="2.2rem"
            textTransform="uppercase"
            fontWeight="200"
            color="#fff"
          >
            GenClone
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              bg="#0c1722"
              mt="1rem"
              mr="1rem"
              px={4}
              py={2}
              borderRadius="0"
              _hover={{ color: "#fff" }}
              _expanded={{ bg: "#A6A6A6", color: "#fff" }}
              _focus={{ boxShadow: "none" }}
            >
              {" "}
              <GoThreeBars />
            </MenuButton>
            <MenuList bg="#000000" color="#A6A6A6">
              <MenuItem _hover={{ bg: "#000000", color: "#fff" }}>
                Home
              </MenuItem>
              <MenuItem _hover={{ bg: "#000000", color: "#fff" }}>
                Digital Products
              </MenuItem>
              <MenuItem _hover={{ bg: "#000000", color: "#fff" }}>
                Physical Products
              </MenuItem>
              <MenuItem _hover={{ bg: "#000000", color: "#fff" }}>
                Talent Management
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
