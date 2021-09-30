import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomChip from "../InputTextField/CustomChip";

describe("Custom Chip", () => {

    test("test custom chip render", () => {
        const { getByTestId } = render(<CustomChip />);
        expect(getByTestId("custom-chip")).toBeInTheDocument();
    });
});