import React from "react";

//Import FORM HANDLER
import { useForm, ValidationError } from "@formspree/react";

// Import CHAKRA tools
import {
  Form,
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

const FormCreator = () => {
  //FORM HANDLER on submit
  const [state, handleSubmit] = useForm("mzboykqn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <FormControl isRequired method="post" onSubmit={handleSubmit}>
        <FormLabel className="text-container" fontWeight="300">
          Name
        </FormLabel>
        <Input placeholder="e.g Alex Smith" id="name" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <FormLabel className="text-container" fontWeight="300" htmlFor="email">
          Email
        </FormLabel>
        <Input
          placeholder="e.g alexsmith@gmail.com"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <FormLabel className="text-container" fontWeight="300">
          Social username
        </FormLabel>
        <Input placeholder="e.g@username" id="username" name="username" />

        <FormLabel className="text-container" fontWeight="300">
          Number of followers or subscribers
        </FormLabel>
        <Input
          placeholder="e.g 14,000"
          id="nbrfollowers"
          type="number"
          name="nbrfollowers"
          min="10000"
          max="100000000"
        />

        <FormLabel className="text-container" fontWeight="300">
          Message
        </FormLabel>
        <Textarea
          placeholder="Enter Your message..."
          id="message"
          name="message"
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
          mr={3}
          type="submit"
          disabled={state.submitting}
        >
          Send your message
        </Button>
      </FormControl>
    </>
  );
};

export default FormCreator;
