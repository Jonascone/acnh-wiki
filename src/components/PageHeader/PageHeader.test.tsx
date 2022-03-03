import React from "react";
import { render, screen } from "@testing-library/react";
import OriginalPageHeader from ".";
import { MemoryRouter } from "react-router";

const PageHeader = () => (
  <MemoryRouter>
    <OriginalPageHeader />
  </MemoryRouter>
);

describe("PageHeader component", () => {
  it("displays a banner", () => {
    render(<PageHeader />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
