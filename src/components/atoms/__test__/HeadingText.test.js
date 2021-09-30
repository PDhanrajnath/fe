import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeadingText from "../headingText/HeadingText";

describe("Heading text", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <HeadingText label={"Heading"}/>
        );
        expect(container).toMatchSnapshot();
    });

    test("test heading render", () => {
        const { getByTestId } = render(<HeadingText label={"Heading"}/>);
        expect(getByTestId("heading-text")).toBeInTheDocument();
    });
});