import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../Counter";

const testId = "counter-placeholder";
const totalJobs = 897;
const city = "Hyderabad";

describe("Counter placeholder test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <Counter city={city} totalJobs={totalJobs} dataTestId={testId} />
    );
    expect(container).toMatchSnapshot();
  });

  test("test counter render", () => {
    const { getByTestId } = render(<Counter city={city} totalJobs={totalJobs} dataTestId={testId} />);
    expect(getByTestId("counter-placeholder")).toBeInTheDocument();
  });
});