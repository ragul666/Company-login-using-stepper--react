import {
  Box,
  Text,
  HStack,
  PinInput,
  PinInputField,
  Flex, 
  Button,
  useToast,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";

const ThirdPage = ({ incrementPage, decrementPage }) => {
  const [code, setCode] = useState(0);
  const toast = useToast();

  const submitHandler = () => {
    toast({
      title: "Registeration Completed.",
      description: "You have successfully registered.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <Box>
      <Text mb={5}>
        We have sent verification code to your Email Address. Please check
      </Text>
      <Text mb={2}> Please Enter your Verification Code</Text>
      <HStack>
        <PinInput onChange={setCode}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Flex justifyContent="flex-end" width="100%" mt={4}>
        <Button
          colorScheme="teal"
          mr={4}
          variant="outline"
          leftIcon={<ChevronLeftIcon />}
          onClick={decrementPage}
        >
          Previous
        </Button>
        <Button
          colorScheme="orange"
          isDisabled={code.toString().length < 4}
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default ThirdPage;
