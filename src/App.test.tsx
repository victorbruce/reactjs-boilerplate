import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    // arrange
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // act
    let text = screen.getByText("⚛️ React Boilerplate");

    // assert
    expect(text).toBeInTheDocument();
  });
});
