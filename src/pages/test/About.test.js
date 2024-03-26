

import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About component", () => {
  test("renders the component", () => {
    render(<About />);
    
    // Test the presence of specific text content
    expect(screen.getByText("Professional Background and Skillset")).toBeInTheDocument();
    expect(screen.getByText("Kaung Min Khant")).toBeInTheDocument();
    expect(screen.getByText("+959402532566")).toBeInTheDocument();
    expect(screen.getByText("kaungminkhant.dev.mm@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Mandalay,Myanmar")).toBeInTheDocument();
    expect(screen.getByText(/over 3 years of experience in Software development/i)).toBeInTheDocument();
    expect(screen.getByText(/I have developed multiple web applications and websites with a user-centric approach/i)).toBeInTheDocument();
    expect(screen.getByText(/actively pursuing professional development in Node.js, Express, and MongoDB/i)).toBeInTheDocument();

    // Test the structure of the component
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("about-heading")).toBeInTheDocument();
    expect(screen.getByTestId("about-details")).toBeInTheDocument();
    expect(screen.getByTestId("about-name")).toBeInTheDocument();
    expect(screen.getByTestId("about-phone")).toBeInTheDocument();
    expect(screen.getByTestId("about-email")).toBeInTheDocument();
    expect(screen.getByTestId("about-address")).toBeInTheDocument();
    expect(screen.getByTestId("about-bullets")).toBeInTheDocument();
  });
});
