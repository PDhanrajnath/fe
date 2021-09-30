import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chip from "../Chip";

describe("Chip placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <Chip />
    );
    expect(container).toMatchSnapshot();
  });

  global.fetch = jest.fn(() =>
  Promise.resolve()
);

  test("test chip render", () => {
    const { getByTestId } = render(<Chip />);
    expect(getByTestId("chip-placeholder")).toBeInTheDocument();
  });
});