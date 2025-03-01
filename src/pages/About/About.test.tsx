import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AboutPage from ".";

describe("About Page", () => {
  it("should render the about page", () => {
    // arrange
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    // act
    let heading = screen.getByRole("heading");

    // assert
    expect(heading).toHaveTextContent(/about this project/i);
  });
});
