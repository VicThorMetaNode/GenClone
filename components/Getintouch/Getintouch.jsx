import React, { useRef, useState } from "react";

//Import Parallax Animation
// import { useInView } from "react-intersection-observer";

// import styles from "../../styles/Home.module.css";

// Import CHAKRA tools
import {
  useDisclosure,
  Text,
  Container,
  Box,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

//-------------- Import Internal Const for chakra ui

const BannerXStitle = ({ title }) => {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box mb={1} p={2}>
          <Text
            textAlign="center"
            className="title-span"
            fontSize="2rem"
            textTransform="uppercase"
            fontWeight="400"
            pb={2}
            mb={2}
            color="#fff"
          >
            {title}
          </Text>
        </Box>
      </Flex>
    </>
  );
};
const BannerSM = ({ title, desc1 }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box mb={4} p={8}>
      <Text
        textAlign="center"
        className="title-span"
        fontSize="2rem"
        textTransform="uppercase"
        fontWeight="400"
        pb={2}
        mb={2}
        color="#fff"
      >
        {" "}
        {title}
      </Text>

      <Container
        textAlign="center"
        className="text-container"
        fontSize="1.1rem"
        fontWeight="100"
        color="#fff"
        pb={4}
        mt={2}
      >
        {desc1}
      </Container>
    </Box>
  </Flex>
);

//-------------- Import Internal Const for chakra ui FORMS
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
  //BTN animation
  // const { ref: refBtnModal, inView: myParallaxBtnModal } = useInView();

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
