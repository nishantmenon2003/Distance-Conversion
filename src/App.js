import "./App.css";
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

function App() {
  // Data values for first tool
  const [val, setVal] = React.useState("");
  const [calculatedValue, setCalculatedValue] = React.useState("");

  // Data values for second tool
  const [val1, setVal1] = React.useState(""); // First input value
  const [val2, setVal2] = React.useState(""); // Second input value
  const [kmCalc, setkmCalc] = React.useState(""); // Kilometer Calculation
  const [mileCalc, setMileCalc] = React.useState(""); // Mile Calculation
  const [Drop1, setDrop1] = React.useState(""); // Drop Down 1
  const [Drop2, setDrop2] = React.useState(""); // Drop Down 2

  // Function to convert Miles to KM
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

  // Function for multiplying two numbers
  const multiplication = () => {
    if (isNaN(val1) || isNaN(val2)) {
      alert("Make sure your input is a valid number.");
    } else {
      // Case 1
      if (Drop1 === Drop2 && Drop1 === "Kilometers (km)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        let product = first * second;
        setkmCalc(product);
        product = product / 1.609344;
        setMileCalc(product);
      }
      // Case 2
      else if (Drop1 === "Kilometers (km)" && Drop2 === "Miles (mi)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        second = second * 1.609344;
        let product = first * second;
        setkmCalc(product);
        product = product / 1.609344;
        setMileCalc(product);
      }
      // Case 3
      else if (Drop1 === "Miles (mi)" && Drop2 === "Kilometers (km)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        first = first * 1.609344;
        let product = first * second;
        setkmCalc(product);
        product = product / 1.609344;
        setMileCalc(product);
      }
      // Case 4
      else if (Drop1 === Drop2 && Drop1 === "Miles (mi)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        let product = first * second;
        setMileCalc(product);
        product = product * 1.609344;
        setkmCalc(product);
      }
    }
  };

  // Function for diving two numbers
  const division = () => {
    if (isNaN(val1) || isNaN(val2)) {
      alert("Make sure your input is a valid number.");
    } else if (parseFloat(val1) === 0 || parseFloat(val2) === 0) {
      alert("Error: Division by Zero");
    } else {
      // Case 1
      if (Drop1 === Drop2 && Drop1 === "Kilometers (km)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        let quotient = first / second;
        setkmCalc(quotient);
        quotient = quotient / 1.609344;
        setMileCalc(quotient);
      }
      // Case 2
      else if (Drop1 === "Kilometers (km)" && Drop2 === "Miles (mi)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        second = second * 1.609344;
        let quotient = first / second;
        setkmCalc(quotient);
        quotient = quotient / 1.609344;
        setMileCalc(quotient);
      }
      // Case 3
      else if (Drop1 === "Miles (mi)" && Drop2 === "Kilometers (km)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        first = first * 1.609344;
        let quotient = first / second;
        setkmCalc(quotient);
        quotient = quotient / 1.609344;
        setMileCalc(quotient);
      }
      // Case 4
      else if (Drop1 === Drop2 && Drop1 === "Miles (mi)") {
        let first = parseFloat(val1);
        let second = parseFloat(val2);
        let quotient = first / second;
        setMileCalc(quotient);
        quotient = quotient * 1.609344;
        setkmCalc(quotient);
      }
    }
  };

  // Code that is returned and displayed to webpage
  return (
    <>
      <div className="TitleBar">
        <header className="TitleBar-header">
          <Text fontSize="30px" color="white" as="underline">
            Nishant Menon's Distance Conversion Tool
          </Text>
        </header>
      </div>
      {/* -------------------
      First Tool
      Converter for Miles and Kilometers
      -------------------- */}

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

      {/* -------------------
      Second Tool
      Arithmetic for Miles and Kilometers
      -------------------- */}

      <div classname="Arithmetic">
        <header className="Arithmetic-header">
          {/* -------------------
          Top Text (3 lines)
          -------------------- */}
          <Text fontSize="30px" color="white" as="bold">
            Miles / Kilometers Arithmetic
          </Text>
          <Text fontSize="17px" color="white">
            Enter two values and choose the unit for both of those values.
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
                <Button
                  colorScheme="blue"
                  variant="solid"
                  id="SubButton"
                  onClick={multiplication}
                >
                  x (Multiplication)
                </Button>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  id="SubButton"
                  onClick={division}
                >
                  / (Division)
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
      <div classname="bottom">
        <header className="bottom-header"></header>
      </div>
    </>
  );
}

export default App;
