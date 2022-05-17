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
      <FormControl method="post" onSubmit={handleSubmit}>
        {/* <FormLabel className="text-container" fontWeight="300">
          Name
        </FormLabel>
        <Input placeholder="e.g Alex Smith" id="name" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} /> */}
        <FormLabel className="text-container" fontWeight="300">
          Email
        </FormLabel>
        <Input
          placeholder="e.g alexsmith@gmail.com"
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* <FormLabel className="text-container" fontWeight="300">
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
        /> */}

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
        <ModalFooter>
          <Button
            type="submit"
            disabled={state.submitting}
            className="text-container"
            textTransform="uppercase"
            fontWeight="100"
            colorScheme="blue"
            m={3}
          >
            Send your message
          </Button>
          {/* <Button
              onClick={onClose}
              bgColor="transparent"
              border="2px solid #89adf5"
            >
              Cancel
            </Button> */}
        </ModalFooter>
      </FormControl>
    </>
  );
};

export default FormCreator;
