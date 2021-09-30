import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";



describe("Navbar test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <BrowserRouter><Navbar /></BrowserRouter>
      );
      expect(container).toMatchSnapshot();
    });

    test("Test Navbar organism render", () => {
      const { getByTestId } = render(<BrowserRouter><Navbar /></BrowserRouter>);
      expect(getByTestId("nav-bar")).toBeInTheDocument();
    });
  });