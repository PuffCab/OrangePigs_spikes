import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import App from "./App";

test("text should render", () => {
  //Arrage
  render(<App />);

  //Act
  const text = screen.getByText("Vite + React");

  // Assert
  expect(text).toBeInTheDocument();
});

describe("testing app component", () => {
  it("should render a button with the text count is", () => {
    render(<App />);

    const button = screen.getByRole("button");
    const buttonText = "count is";

    expect(button).toHaveTextContent(buttonText);
  });

  it("should contain 2 p tags", () => {
    render(<App />);

    const aTags = screen.getAllByRole("link");

    expect(aTags.length).toBe(2);
  });
});

function sum(a, b) {
  return a + b;
}

test("sum function returns 5", () => {
  expect(sum(2, 3)).toEqual(6);
});
