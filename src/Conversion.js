import React from "react";

import {
  ChakraProvider,
  VStack,
  Input,
  Button,
  ButtonGroup,
  Box,
  Text,
} from "@chakra-ui/react";
const Conversion = () => {
  // Data values for first tool
  const [val, setVal] = React.useState("");
  const [calculatedValue, setCalculatedValue] = React.useState("");

  const calculatetoKM = () => {
    if (isNaN(val)) {
      alert("Make sure your input is a valid number.");
    } else {
      let miles = parseFloat(val);
      let km = miles * 1.609344;
      setCalculatedValue(km);
    }
  };

  // Function to convert KM to Miles
  const calculatetoMiles = () => {
    if (isNaN(val)) {
      alert("Make sure your input is a valid number.");
    } else {
      let km = parseFloat(val);
      let miles = km / 1.609344;
      setCalculatedValue(miles);
    }
  };

  return (
    <div className="Conversion">
      <header className="Conversion-header">
        {/* -------------------
          Top Text (3 lines)
          -------------------- */}
        <Text fontSize="30px" color="white" as="underline">
          Miles / Kilometers Conversion
        </Text>
        <Text fontSize="17px" color="white">
          Enter a number in miles or kilometers and click which you would like
          to convert to:
        </Text>
        <Text fontSize="17px" color="grey">
          Examples: (2, 3.3, 1000, 44.68...)
        </Text>

        {/* -------------------
          Input Text Box:
          "Enter Value Here:"
          -------------------- */}
        <ChakraProvider>
          <VStack spacing={4}>
            <Input
              variant="filled"
              placeholder="Enter Value Here"
              size="lg"
              id="Textbox1"
              bg="grey"
              _hover={{ bg: "green.400" }}
              _placeholder={{ color: "gray.300" }}
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />

            {/* -------------------
              Buttons:
              "Convert to KM" & "Convert to Miles"
              -------------------- */}
            <ButtonGroup>
              <Button
                colorScheme="blue"
                variant="solid"
                id="Button1"
                onClick={calculatetoKM}
              >
                Convert to km
              </Button>
              <Button
                colorScheme="blue"
                variant="solid"
                id="Button1"
                onClick={calculatetoMiles}
              >
                Convert to miles
              </Button>
            </ButtonGroup>

            {/* -------------------
              Answer Box:
              "Answer: {calculatedValue}""
              -------------------- */}
            <Box
              as="button"
              borderRadius="md"
              bg="tomato"
              color="white"
              px={4}
              h={12}
              id="Answer"
            >
              Answer: {calculatedValue}
            </Box>
          </VStack>
        </ChakraProvider>
      </header>
    </div>
  );
};

export default Conversion;
