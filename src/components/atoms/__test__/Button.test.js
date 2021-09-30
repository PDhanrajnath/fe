import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../button/Button";


describe("Button test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <Button type="small" label="Test small" variant="contained" color="primary"/>
      );
      expect(container).toMatchSnapshot();
    });
  
    test("Test Button with type small and contained render", () => {
      const { getByTestId } = render(<Button type="small" label="Test small" variant="contained" color="primary"/>);
      expect(getByTestId("button")).toBeInTheDocument();
    });
  
    test("Test Button with type medium and outlined render", () => {
      const { getByTestId } = render(<Button type="medium" label="Test medium" variant="outlined" color="primary"/>);
      expect(getByTestId("button")).toBeInTheDocument();
    });
    test("Test Button with type long and contained render", () => {
        const { getByTestId } = render(<Button type="medium" label="Test medium" variant="contained" color="primary"/>);
        expect(getByTestId("button")).toBeInTheDocument();
      });
  });