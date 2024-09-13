import { render, screen } from "@testing-library/react";
import Button from "./Button";
describe("check the element of Button component", () => {
  test("should check the element of button present or not", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
