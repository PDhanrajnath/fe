import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LabelNumber from "../StepperNumber/LabelNumber";


describe("LabelNumber test", () => {
    it("Matches the snapshot", () => {  
      const { container } = render(
        <LabelNumber isVisited={false} number="1"/>
      );
      expect(container).toMatchSnapshot();
    });
  
    test("Test LabelNumber render", () => {
      const { getByTestId } = render(<LabelNumber isVisited={false} number="1"  />);
      expect(getByTestId("label-number")).toBeInTheDocument();
    });
  
    test("Test filled LabelNumber render", () => {
      const { getByTestId } = render(<LabelNumber isVisited={true} number="2" />);
      expect(getByTestId("label-number")).toBeInTheDocument();
    });
  });