import React from "react";

import {
  ChakraProvider,
  VStack,
  Input,
  Button,
  ButtonGroup,
  Box,
  Text,
  Select,
} from "@chakra-ui/react";

const Calculate = () => {
  // Data values for second tool
  const [val1, setVal1] = React.useState(""); // First input value
  const [val2, setVal2] = React.useState(""); // Second input value
  const [kmCalc, setkmCalc] = React.useState(""); // Kilometer Calculation
  const [mileCalc, setMileCalc] = React.useState(""); // Mile Calculation
  const [Drop1, setDrop1] = React.useState(""); // Drop Down 1
  const [Drop2, setDrop2] = React.useState(""); // Drop Down 2

  // Function for adding two numbers
  const addition = () => {
    if (isNaN(val1) || isNaN(val2)) {
      alert("Make sure your input is a valid number.");
    } else {
      // Case 1
      if (Drop1 === Drop2 && Drop1 === "Kilometers (km)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        let sum = first + second;
        setkmCalc(sum);
        sum = sum / 1.609344;
        setMileCalc(sum);
      }
      // Case 2
      else if (Drop1 === "Kilometers (km)" && Drop2 === "Miles (mi)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        second = second * 1.609344;
        let sum = first + second;
        setkmCalc(sum);
        sum = sum / 1.609344;
        setMileCalc(sum);
      }
      // Case 3
      else if (Drop1 === "Miles (mi)" && Drop2 === "Kilometers (km)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        first = first * 1.609344;
        let sum = first + second;
        setkmCalc(sum);
        sum = sum / 1.609344;
        setMileCalc(sum);
      }
      // Case 4
      else if (Drop1 === Drop2 && Drop1 === "Miles (mi)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        let sum = first + second;
        setMileCalc(sum);
        sum = sum * 1.609344;
        setkmCalc(sum);
      }
    }
  };

  // Function for subtracting two numbers
  const subtraction = () => {
    if (isNaN(val1) || isNaN(val2)) {
      alert("Make sure your input is a valid number.");
    } else {
      // Case 1
      if (Drop1 === Drop2 && Drop1 === "Kilometers (km)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        let difference = first - second;
        setkmCalc(difference);
        difference = difference / 1.609344;
        setMileCalc(difference);
      }
      // Case 2
      else if (Drop1 === "Kilometers (km)" && Drop2 === "Miles (mi)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        second = second * 1.609344;
        let difference = first - second;
        setkmCalc(difference);
        difference = difference / 1.609344;
        setMileCalc(difference);
      }
      // Case 3
      else if (Drop1 === "Miles (mi)" && Drop2 === "Kilometers (km)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        first = first * 1.609344;
        let difference = first - second;
        setkmCalc(difference);
        difference = difference / 1.609344;
        setMileCalc(difference);
      }
      // Case 4
      else if (Drop1 === Drop2 && Drop1 === "Miles (mi)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        let difference = first - second;
        setMileCalc(difference);
        difference = difference * 1.609344;
        setkmCalc(difference);
      }
    }
  };

  return (
    <div classname="Arithmetic">
      <header className="Arithmetic-header">
        {/* -------------------
          Top Text (3 lines)
          -------------------- */}
        <Text fontSize="30px" color="white" as="bold">
          Miles / Kilometers Arithmetic
        </Text>
        <Text fontSize="17px" color="white">
          Enter two values and choose the unit for both of those values:
        </Text>
        <Text fontSize="17px" color="grey">
          Examples: (2, 3.3, 1000, 44.68...)
        </Text>

        {/* -------------------
          Input Text Box:
          "Enter Value 1 Here:"
          -------------------- */}
        <ChakraProvider>
          <VStack spacing={4}>
            <Input
              variant="filled"
              placeholder="Enter Value 1 Here"
              size="lg"
              id="Textbox1"
              bg="grey"
              _hover={{ bg: "green.400" }}
              _placeholder={{ color: "gray.300" }}
              value={val1}
              onChange={(e) => setVal1(e.target.value)}
            />
            {/* -------------------
              Select (Dropdown 1):
              Kilometers or Miles
              -------------------- */}
            <Select
              variant="filled"
              placeholder="Choose unit for value 1:"
              bg="grey"
              color="black"
              _hover={{ bg: "purple.400" }}
              _placeholder={{ color: "purple.300" }}
              value={Drop1}
              onChange={(e) => setDrop1(e.target.value)}
            >
              <option value="Kilometers (km)">Kilometers (km)</option>
              <option value="Miles (mi)">Miles (mi)</option>
            </Select>

            {/* -------------------
              Buttons:
              Addition, Subtraction, Multiplication, and Division
              -------------------- */}
            <ButtonGroup>
              <Button
                colorScheme="blue"
                variant="solid"
                id="AddButton"
                onClick={addition}
              >
                + (Addition)
              </Button>
              <Button
                colorScheme="blue"
                variant="solid"
                id="SubButton"
                onClick={subtraction}
              >
                - (Subtraction)
              </Button>
            
            </ButtonGroup>

            {/* -------------------
              Input Text Box:
              "Enter Value 2 Here:"
              -------------------- */}
            <Input
              variant="filled"
              placeholder="Enter Value 2 Here"
              size="lg"
              id="Textbox1"
              bg="grey"
              _hover={{ bg: "green.400" }}
              _placeholder={{ color: "gray.300" }}
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
            />

            {/* -------------------
              Select (Dropdown 2):
              Kilometers or Miles
              -------------------- */}
            <Select
              variant="filled"
              placeholder="Choose unit for value 2:"
              bg="grey"
              color="black"
              _hover={{ bg: "purple.400" }}
              _placeholder={{ color: "purple.300" }}
              value={Drop2}
              onChange={(e) => setDrop2(e.target.value)}
            >
              <option value="Kilometers (km)">Kilometers (km)</option>
              <option value="Miles (mi)">Miles (mi)</option>
            </Select>

            {/* -------------------
              Answer Box 1 and 2:
              {Kilometers} and {Miles}
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
              Answer in km: {kmCalc}
            </Box>
            <Box
              as="button"
              borderRadius="md"
              bg="tomato"
              color="white"
              px={4}
              h={12}
              id="Answer"
            >
              Answer in miles: {mileCalc}
            </Box>
          </VStack>
        </ChakraProvider>
      </header>
    </div>
  );
};

export default Calculate;
