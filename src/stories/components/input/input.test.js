import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Check the componet of Input", () => {
  test("should check the paragraph of component", () => {
    render(<Input />);
    expect(screen.getByTestId("input_paragraph")).toBeInTheDocument();
  });

  test("should check the inupt element  ", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("size small")).toBeInTheDocument();
  });
});
  