import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Content from "../Content/Content";

describe("Content", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <Content heading={"Description"} description={["test"]}/>
        );
        expect(container).toMatchSnapshot();
    });

    test("test content render", () => {
        const { getByTestId } = render(<Content heading={"Description"} description={["test"]}/>);
        expect(getByTestId("job-content")).toBeInTheDocument();
    });
});