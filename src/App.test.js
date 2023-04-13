import { render, screen } from "@testing-library/react";
import App from "./App";

test("conversion to km", () => {
  render(<Conversion />);
  const input = screen.getByText(/Convert to km/i);
  expect(input).toBeInTheDocument();
});
