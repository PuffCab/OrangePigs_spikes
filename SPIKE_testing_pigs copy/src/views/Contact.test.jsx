import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import Contact from "./Contact";

test("header in Contact renders", () => {
  render(<Contact />);

  const h1 = screen.getByRole("heading");

  expect(h1).toBeInTheDocument();
});

test("should render two inputs with placerholder value email and name", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("name");
  const emailInput = screen.getByPlaceholderText("email");

  expect(nameInput, emailInput).toBeInTheDocument();
});
test("button element should render", () => {
  render(<Contact />);

  const button = screen.getByTestId("test-button");

  expect(button).toBeInTheDocument();
});

test("span element should not be initially visible", () => {
  render(<Contact />);

  const span = screen.getByTestId("span");

  expect(span).not.toBeVisible();
});

test("input elements should be initially empty", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("name");
  const emailInput = screen.getByPlaceholderText("email");

  expect(nameInput.value).toBe("");
  expect(emailInput.value).toBe("");
});

test("inputs should display typed value", () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("name");
  const emailInput = screen.getByPlaceholderText("email");

  const nameInputText = "Tom";
  const emailInputText = "tom@tom.com";

  fireEvent.change(nameInput, { target: { value: nameInputText } });
  fireEvent.change(emailInput, { target: { value: emailInputText } });

  expect(nameInput.value).toBe(nameInputText);
  expect(emailInput.value).toBe(emailInputText);
});

test("span should display user name and email after clicking button", async () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText("name");
  const emailInput = screen.getByPlaceholderText("email");
  const button = screen.getByTestId("test-button");
  const span = screen.getByTestId("span");

  const nameInputText = "Tom";
  const emailInputText = "tom@tom.com";

  fireEvent.change(nameInput, { target: { value: nameInputText } });
  fireEvent.change(emailInput, { target: { value: emailInputText } });
  fireEvent.click(button);

  //   expect(span).toBeVisible();
  //   expect(span).toBeInTheDocument(
  //     `Hi ${nameInputText}, message sent to ${emailInputText}`
  //   );

  await waitFor(
    () => {
      expect(span).toBeVisible();
      expect(span).toBeInTheDocument(
        `Hi ${nameInputText}, message sent to ${emailInputText}`
      );
    },
    { timeout: 3000 }
  );
});

test("snapshot test", () => {
  const { container } = render(<Contact />);

  expect(container).toMatchSnapshot();
});
