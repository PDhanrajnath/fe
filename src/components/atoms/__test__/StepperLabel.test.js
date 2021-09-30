import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepperLabel from "../StepperLabel/StepperLabel";

describe("Stepper Label test", () => {
    it("Matches the snapshot", () => {  
      const { container } = render(
        <StepperLabel isVisited={true} label="Your Skills" />
      );
      expect(container).toMatchSnapshot();
    });
    test("Test Stepper Label render", () => {
      const { getByTestId } = render(<StepperLabel isVisited={false} label="Your Location"  />);
      expect(getByTestId("stepper-label")).toBeInTheDocument();
    });
  
    test("Test Stepper visited Label render", () => {
      const { getByTestId } = render(<StepperLabel isVisited={true} label="Job Location" />);
      expect(getByTestId("stepper-label")).toBeInTheDocument();
    });
  });