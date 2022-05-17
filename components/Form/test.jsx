<FormControl isRequired method="" onSubmit={handleSubmit}>
  {/* <FormLabel className="text-container" fontWeight="300">
          Agency Name
        </FormLabel>
        <Input
          placeholder="e.g GenClone Agency"
          id="agencyname"
          name="agencyname"
        />
        <ValidationError
          prefix="Name"
          field="agencyname"
          errors={state.errors}
        /> */}
  <FormLabel className="text-container" fontWeight="300" htmlFor="email">
    Agency Email
  </FormLabel>
  <Input
    placeholder="e.g victhor@genclone.fake"
    id="email"
    type="email"
    name="email"
  />
  <ValidationError prefix="Email" field="email" errors={state.errors} />

  {/* <FormLabel className="text-container" fontWeight="300">
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
  <Textarea placeholder="Enter Your message..." id="message" name="message" />
  <ValidationError prefix="Message" field="message" errors={state.errors} />
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
</FormControl>;
