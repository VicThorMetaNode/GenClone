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
} from "@chakra-ui/react";

const FormAgency = () => {
  //FORM HANDLER on submit
  const [state, handleSubmit] = useForm("mdobybaa");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form className="fom-form" method="post" onSubmit={handleSubmit}>
        <input
          className="form-mail"
          placeholder="MAIL"
          type="email"
          id="email"
          name="email"
          required
        />

        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Button
          bg="#e7af5d"
          borderRadius="0px"
          border="0.7px"
          height="30px"
          className="btn-submit"
          type="submit"
          disabled={state.submitting}
          _focus={{
            boxShadow: "0 0 1px 2px #e7af5d, 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          SEND
        </Button>
      </form>
    </>
  );
};

export default FormAgency;
