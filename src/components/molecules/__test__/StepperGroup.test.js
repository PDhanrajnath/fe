import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepperGroup from "../StepperGroup/StepperGroup";


describe("StepperGroup test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <StepperGroup item1={false} item2={false} item3={false} />
      );
      expect(container).toMatchSnapshot();
    });
  
    test("Test inactive items in Stepper Group  render", () => {
      const { getByTestId } = render(<StepperGroup item1={false} item2={false} item3={false} />);
      expect(getByTestId("stepper-group")).toBeInTheDocument();
    });
  
    test("Test active items in Stepper Group render", () => {
      const { getByTestId } = render(<StepperGroup item1={true} item2={true} item3={true} /> );
      expect(getByTestId("stepper-group")).toBeInTheDocument();
    });
  });