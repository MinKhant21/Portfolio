// Projects.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../Projects";

describe("Projects component", () => {
  test("renders the component", () => {
    render(<Projects />);
    
    // Test that the component renders without errors
    const projectsElement = screen.getByTestId("projects");
    expect(projectsElement).toBeInTheDocument();

    // You can also add more specific tests as needed, such as testing the presence of specific projects.
  });
});
