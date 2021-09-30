import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TabGroup from "../TabGroup/TabGroup";
import { BrowserRouter } from "react-router-dom";

describe("TabGroup test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter><TabGroup /></BrowserRouter>
      );
      expect(container).toMatchSnapshot();
    });
  
    test("Test TabGroup molecule render", () => {
      const { getByTestId } = render(<BrowserRouter><TabGroup /></BrowserRouter>);
      expect(getByTestId("tab-group")).toBeInTheDocument();
    });
  });