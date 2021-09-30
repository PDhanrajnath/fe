import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Label from "../Label";

describe("Label placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
        <Label size="large" text="AQI" />
    );
    expect(container).toMatchSnapshot();
  });

  test("test large text render", () => {
    const { getByTestId } = render(<Label size="large" text="AQI"/>);
    expect(getByTestId("large-text")).toBeInTheDocument();
  });

  test("test small text render", () => {
    const { getByTestId } = render(<Label size="small" text="AQI"/>);
    expect(getByTestId("small-text")).toBeInTheDocument();
  });
});
