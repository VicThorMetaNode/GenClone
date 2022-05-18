import React from "react";

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
  VStack,
} from "@chakra-ui/react";

const FormAgency = () => {
  //FORM HANDLER on submit
  const [state, handleSubmit] = useForm("mdobybaa");
  if (state.succeeded) {
    return (
      <>
        <VStack
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          bg="#fff"
          borderRadius="25px"
          mt={7}
        >
          <Box m={5} p={2}>
            <Container
              textAlign="center"
              className="title-span"
              fontSize="2rem"
              textTransform="uppercase"
              fontWeight="400"
              color="#000000"
            >
              {" "}
              Message Sent !{" "}
            </Container>
          </Box>
          <Box p={2}>
            <Container
              color="#000000"
              textAlign="center"
              className="text-container"
              fontSize="1.1rem"
              fontWeight="100"
              mb={7}
            >
              Thank you for contacting us !
            </Container>
          </Box>
        </VStack>
      </>
    );
  }
  return (
    <>
      <form className="fom-form" method="post" onSubmit={handleSubmit}>
        <FormLabel className="text-container" fontWeight="300">
          Agency Name
        </FormLabel>
        <Input
          className="form-mail"
          placeholder=" e.g GenClone inc."
          type="string"
          id="name"
          name="name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <FormLabel className="text-container" fontWeight="300">
          Agency Email
        </FormLabel>
        <Input
          className="form-mail"
          placeholder="e.g victhor@genclone.net"
          type="email"
          id="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <FormLabel className="text-container" fontWeight="300">
          Message
        </FormLabel>
        <Textarea
          id="message"
          name="message"
          placeholder="Type your message here"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button
          className="text-container"
          textTransform="uppercase"
          fontWeight="100"
          colorScheme="blue"
          m={3}
          type="submit"
          disabled={state.submitting}
        >
          SEND
        </Button>
      </form>
    </>
  );
};

export default FormAgency;
