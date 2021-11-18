import { Box, Text, Input, Flex, Button } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const FirstPage = ({
  incrementPage,
  formDetails,
  updateFormDetails,
  decrementPage,
}) => {
  const { companyName, email, jobTitle, experience } = formDetails;
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
            Company Name
          </Text>
          <Input
            value={companyName}
            onChange={(e) => updateFormDetails("companyName", e.target.value)}
            isRequired={true}
          />
        </Box>
        <Box mt={4}>
          <Text mb={2} fontWeight="500">
            Email Id
          </Text>
          <Input
            value={email}
            onChange={(e) => updateFormDetails("email", e.target.value)}
            isRequired={true}
          />
        </Box>
        <Box mt={4}>
          <Text mb={2} fontWeight="500">
            Job Title
          </Text>
          <Input
            value={jobTitle}
            onChange={(e) => updateFormDetails("jobTitle", e.target.value)}
            isRequired={true}
          />
        </Box>
        <Box mt={4}>
          <Text mb={2} fontWeight="500">
            Experience
          </Text>
          <Input
            type="number"
            value={experience}
            onChange={(e) => updateFormDetails("experience", e.target.value)}
            isRequired={true}
          />
        </Box>

        <Flex justifyContent="flex-end" width="100%" mt={4}>
          <Button
            colorScheme="orange"
            mr={4}
            variant="outline"
            leftIcon={<ChevronLeftIcon />}
            onClick={decrementPage}
          >
            Previous
          </Button>
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
