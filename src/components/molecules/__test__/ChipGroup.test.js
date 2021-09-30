import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChipGroup from "../ChipGroup";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";

const store = createStore(rootReducer);

const testId = "ChipGroup";
const chips = ["10-20 km", "Past 24 hours", "Green Commute", "Fresher"];

global.fetch = jest.fn(() =>
      Promise.resolve()
    );

describe("Chip Group test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <Provider store={store}><ChipGroup chips={chips} dataTestId={testId} /></Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test("test ChipGroup render", () => {
    const { getByTestId } = render(<Provider store={store}><ChipGroup chips={chips} dataTestId={testId} /></Provider>);
    expect(getByTestId("ChipGroup")).toBeInTheDocument();
  });
});