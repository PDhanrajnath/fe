import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FindJob from "../FindJob/FindJob";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";

const store = createStore(rootReducer);

global.fetch = jest.fn(() =>
  Promise.resolve()
);

describe("Find Job", () => {

    test("test find job render", () => {
        const { getByTestId } = render(<Provider store={store}><FindJob options1={[]} options2={[]} /></Provider>);
        expect(getByTestId("find-job")).toBeInTheDocument();
    });
});