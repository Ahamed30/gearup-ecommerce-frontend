import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render a button element with default props", () => {
    const { getByRole } = render(<Button>Default Button</Button>);
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "text-white",
      "rounded-[8px]",
      "px-3",
      "lg:px-6",
      "bg-[#232321]",
      "hover:bg-[#4A69E2]",
      "text-xs",
      "lg:text-sm",
      "py-[12px]"
    );
  });
  it("should render a button element with custom color and size props", () => {
    const { getByRole } = render(
      <Button color="secondary" size="lg">
        Custom Button
      </Button>
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "text-white",
      "rounded-[8px]",
      "px-3",
      "lg:px-6",
      "bg-[#4A69E2]",
      "hover:bg-[#232321]"
    );
  });
  it("should render a button element with custom className prop", () => {
    const { getByRole } = render(
      <Button className="custom-class">Custom Button</Button>
    );
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "text-white",
      "rounded-[8px]",
      "px-3",
      "lg:px-6",
      "bg-[#232321]",
      "hover:bg-[#4A69E2]",
      "text-xs",
      "lg:text-sm",
      "py-[12px]",
      "custom-class"
    );
  });
  it("should render a button element with custom children prop", () => {
    const { getByRole } = render(<Button>Custom Button</Button>);
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Custom Button");
  });
});
