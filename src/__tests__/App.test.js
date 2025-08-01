import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("display image with an alt text describing the image", () => {
    render(<App />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt");
    expect(image).toHaveAttribute("src");
});

test("display a second level heading about me", () => {
    render(<App />);
    const secondHeading = screen.getByRole("heading", {
        level: 2,
        name: /About me/i
    });
    expect(secondHeading).toBeInTheDocument();
});

test("display a paragraph for biography", () => {
    const {container} = render(<App />);
    const paragraph = container.querySelector("p");
    expect(paragraph).toBeInTheDocument();
});

test("has GitHub and LinkedIn links", () => {
  render(<App />);

  const gitHubLink = screen.getByRole("link", { name: /github/i });
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });

  expect(gitHubLink).toBeInTheDocument();
  expect(linkedInLink).toBeInTheDocument();

  expect(gitHubLink).toHaveAttribute("href", expect.stringContaining("github"));
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin"));
});
