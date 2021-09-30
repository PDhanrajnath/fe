import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommuteIcon from '../commuteIcon/CommuteIcon';

describe("CommuteIcon placeholder test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <CommuteIcon type="metro" onClick={() => alert("clicked on metro")} />
      );
      expect(container).toMatchSnapshot();
    });
  
    test("test metro CommuteIcon render", () => {
      const { getByTestId } = render(<CommuteIcon type="metro" onClick={() => alert("clicked on metro")} />);
      expect(getByTestId("metro")).toBeInTheDocument();
    });

    test("test bus CommuteIcon render", () => {
      const { getByTestId } = render(<CommuteIcon type="bus" onClick={() => alert("clicked on bus")} />);
      expect(getByTestId("bus")).toBeInTheDocument();
    });

    test("test car CommuteIcon render", () => {
      const { getByTestId } = render(<CommuteIcon type="car" onClick={() => alert("clicked on car")} />);
      expect(getByTestId("car")).toBeInTheDocument();
    });

    test("test bike CommuteIcon render", () => {
      const { getByTestId } = render(<CommuteIcon type="bike" onClick={() => alert("clicked on bike")} />);
      expect(getByTestId("bike")).toBeInTheDocument();
    });
  });