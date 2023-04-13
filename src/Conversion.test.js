import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Conversion from "./Conversion";

test("Test conversion function - Kilometers to Miles", () => {
  // Render the component
  const { getByText, getByLabelText } = render(<Conversion />);

  // Get input elements
  const input1 = getByLabelText("Enter Value:");
  const select1 = getByLabelText("Select Unit:");

  // Enter values in input element
  fireEvent.change(input1, { target: { value: "5" } });

  // Select units in select element
  fireEvent.change(select1, { target: { value: "Kilometers (km)" } });

  // Click the convert button
  fireEvent.click(getByText("Convert"));

  // Assert the converted value
  expect(getByText("3.1068559611866695")).toBeInTheDocument();
});

test("Test conversion function - Miles to Kilometers", () => {
  // Render the component
  const { getByText, getByLabelText } = render(<Conversion />);

  // Get input elements
  const input1 = getByLabelText("Enter Value:");
  const select1 = getByLabelText("Select Unit:");

  // Enter values in input element
  fireEvent.change(input1, { target: { value: "3.1068559611866695" } });

  // Select units in select element
  fireEvent.change(select1, { target: { value: "Miles (mi)" } });

  // Click the convert button
  fireEvent.click(getByText("Convert"));

  // Assert the converted value
  expect(getByText("5")).toBeInTheDocument();
});
