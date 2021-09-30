import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AQI from "../AQI";

const src ="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/2fbdf0a6-8c92-401e-9811-0d95634962fa.svg";
const alt = "green commute";
const totalJobs = 894;
const city = "Hyderabad";
const size = "small";
const text = "Real- Time Air Quality Index(AQI) in this location";
const testId = "AQI";

describe("AQI test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <AQI src={src} alt={alt} totalJobs={totalJobs} city={city} size={size} text={text} dataTestId={testId} />
    );
    expect(container).toMatchSnapshot();
  });

  test("test AQI render", () => {
    const { getByTestId } = render(<AQI src={src} alt={alt} totalJobs={totalJobs} city={city} size={size} text={text} dataTestId={testId} />);
    expect(getByTestId("AQI")).toBeInTheDocument();
  });
});