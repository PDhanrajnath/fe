import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobDetails from "../JobDetails/JobDetails";

describe("Job details", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <JobDetails contentDescription={[]}/>
        );
        expect(container).toMatchSnapshot();
    });

    test("test Job details render", () => {
        const { getByTestId } = render(<JobDetails  contentDescription={[]}/>);
        expect(getByTestId("job-details")).toBeInTheDocument();
    });
});