import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stepper from "../Stepper/Stepper";


describe("Stepper test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <Stepper number="1"  label="Your Location" isVisited={false}/>
      );
      expect(container).toMatchSnapshot();
    });
  
    test("Test inactive Stepper  render", () => {
      const { getByTestId } = render(<Stepper number="1"  label="Your Location" isVisited={false}/>);
      expect(getByTestId("stepper")).toBeInTheDocument();
    });
  
    test("Test active Stepper render", () => {
      const { getByTestId } = render(<Stepper number="2"  label="Job Location" isVisited={true}/>);
      expect(getByTestId("stepper")).toBeInTheDocument();
    });
  });