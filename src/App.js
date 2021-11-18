import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Step, Steps } from "chakra-ui-steps";

import "./App.css";
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/thirdPage";

function App() {
  const [page, setPage] = useState(1);
  const [formDetails, setFormDetails] = useState({
    name: "",
    country: "",
    gender: "", 
    state: "",
    companyName: "", 
    email: "",
    jobTitle: "",
    experience: "",
  });
  const steps = [
    { label: "Personal Details" },
    { label: "Company Details" },
    { label: "Email Verification" },
  ];

  const updateFormDetails = (name, value) => {
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const incrementPage = () => {
    setPage(page + 1);
  };
  const decrementPage = () => {
    setPage(page - 1);
  };

  const renderPage = () => {
    switch (page) {
      case 1: {
        return (
          <FirstPage
            incrementPage={incrementPage}
            formDetails={formDetails}
            updateFormDetails={updateFormDetails}
          />
        );
      }
      case 2: {
        return (
          <SecondPage
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            formDetails={formDetails}
            updateFormDetails={updateFormDetails}
          />
        );
      }
      case 3: {
        return (
          <ThirdPage
            incrementPage={incrementPage}
            decrementPage={decrementPage}
          />
        );
      }
      default: {
        return (
          <FirstPage
            incrementPage={incrementPage}
            formDetails={formDetails}
            updateFormDetails={updateFormDetails}
          />
        );
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        paddingX: 30,
      }}
    >
      <Text fontSize="32px" sx={{ my: "30px" }}>
        Please Fill The Details
      </Text>
      <Box sx={{ marginBottom: "50px", width: "100%" }}>
        <Steps activeStep={page}>
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              {content}
            </Step>
          ))}
        </Steps>
      </Box>
      <Box
        boxShadow="0 0 10px rgba(0,0,0,0.1)"
        sx={{ padding: 10, width: "40%", borderRadius: "10px" }}
      >
        {renderPage()}
      </Box>
    </Box>
  );
}

export default App;
