import React, { useRef, useState } from "react";

//Import FORM HANDLER
import { useForm, ValidationError } from "@formspree/react";

// Import CHAKRA tools
import {
  useDisclosure,
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
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Input,
} from "@chakra-ui/react";

//-------------- Import Internal Const for chakra ui

import BannerXStitle from "../../utilities/Const/BannerXStitle";
import BannerSM from "../../utilities/Const/bannerSM";
import FormCreator from "../Form/FormCreator";
import FormAgency from "../Form/FormAgency";

//-------------- BROWSER  -----------

const Getintouch = () => {
  //MODAL CONST on click
  const { isOpen, onOpen, onClose } = useDisclosure();
  //MODAL activate Creator or agency FORM
  const [active, setActive] = useState("creatorForm");
  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      <Box mb={-5} pb={1}>
        <BannerXStitle title="GET IN TOUCH WITH US TODAY!" />
      </Box>

      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Button
          onClick={onOpen}
          backgroundColor="transparent"
          border="2px solid #e6ca6f"
          borderRadius="0.70rem"
          textTransform="uppercase"
          fontWeight="100"
          color="#fff"
          fontSize="1rem"
          className="text-container"
          p={4}
          mb={4}
          _hover={{ bg: "transparent" }}
        >
          Contact us now
        </Button>
      </Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg="#000000">
          <BannerSM
            title="Want to know more ?"
            desc1="If you are a creator or an agency that represents creators, get in touch below"
          />
          <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
            <Box m={2}>
              <Button
                bgColor="transparent"
                border="2px solid #89adf5"
                borderRadius="20px"
                className="text-container"
                fontWeight="100"
                pl={6}
                pr={6}
                onClick={() => setActive("creatorForm")}
              >
                Creator
              </Button>
            </Box>
            <Box m={2}>
              <Button
                bgColor="transparent"
                border="2px solid #89adf5"
                borderRadius="20px"
                className="text-container"
                fontWeight="100"
                pl={6}
                pr={6}
                onClick={() => setActive("agencyForm")}
              >
                Agency
              </Button>
            </Box>
          </Flex>

          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              {active === "creatorForm" && <FormCreator />}
              {active === "agencyForm" && <FormAgency />}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Getintouch;
