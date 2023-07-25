import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greetings from "./Greetings";

describe("Working with component of Greetings", () => {
  test("Validating the Hello world value", () => {
    render(<Greetings></Greetings>);

    const mainParagraphHeading = screen.getByText("Hello world");
    expect(mainParagraphHeading).toBeInTheDocument();
  });
  test("Validating the state value value", () => {
    render(<Greetings></Greetings>);

    const mainParagraphHeading = screen.getByText("state value", {
      exact: false,
    });
    expect(mainParagraphHeading).toBeInTheDocument();
  });
  test("Validating the state value value", () => {
    render(<Greetings></Greetings>);

    const mainParagraphHeading = screen.queryAllByRole("Chaging by state", {
      exact: false,
    });

    expect(mainParagraphHeading).not.toBeInTheDocument();
  });
});
