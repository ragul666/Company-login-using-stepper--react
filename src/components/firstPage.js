import {
  Box,
  Text,
  Input,
  Select, 
  Stack,
  RadioGroup,
  Radio,
  Flex,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const FirstPage = ({ incrementPage, formDetails, updateFormDetails }) => {
  const { name, country, gender, state } = formDetails;
  return ( 
    <Box>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          incrementPage();
        }}
      >
        <Box>
          <Text mb={2} fontWeight="500">
            Full Name
          </Text>
          <Input
            value={name}
            onChange={(e) => updateFormDetails("name", e.target.value)}
            isRequired={true}
          />
        </Box>
        <Box mt={4}>
          <Text mb={2} fontWeight="500">
            Country
          </Text>
          <Select
            placeholder="Choose your Country"
            value={country}
            onChange={(e) => updateFormDetails("country", e.target.value)}
            isRequired={true}
          >
            <option value="india">India</option>
            <option value="america">America</option>
            <option value="china">China</option>
          </Select>
        </Box>
        <Box mt={4}>
          <Text mb={2} fontWeight="500">
            State
          </Text>
          <Select
            placeholder="Choose your State"
            value={state}
            onChange={(e) => updateFormDetails("state", e.target.value)}
            isRequired={true}
          >
            <option value="tamilNadu">Tamil Nadu</option>
            <option value="kerala">Kerala</option>
            <option value="karnataka">Karnataka</option>
          </Select>
        </Box>
        <Box mt={4}>
          <Text mb={2} fontWeight="500">
            Gender
          </Text>
          <RadioGroup
            value={gender}
            onChange={(val) => updateFormDetails("gender", val)}
            isRequired={true}
            colorScheme="orange"
          > 
            <Stack direction="row">
              <Radio value="male" mr={6}>
                Male
              </Radio>
              <Radio value="female">Female</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Flex justifyContent="flex-end" width="100%" mt={4}>
          <Button
            type="submit"
            rightIcon={<ChevronRightIcon />}
            colorScheme="orange"
          >
            Next
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default FirstPage;
