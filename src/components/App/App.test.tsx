import React from "react";
import { render } from "@testing-library/react";
import OriginalApp from "../App";
import { MemoryRouter } from "react-router";

const App = () => (
  <MemoryRouter>
    <OriginalApp />
  </MemoryRouter>
);

it("renders without crashing", () => {
  render(<App />);
});
