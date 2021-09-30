import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";
import InputTextField from "../InputTextField/InputTextField";

const store = createStore(rootReducer);

// global.fetch = jest.fn(() =>
//   Promise.resolve()
// );

describe("Input Text Field", () => {

    test("test Input text render", () => {
        const { getByTestId } = render(<Provider store={store}><InputTextField options={[]}/></Provider>);
        expect(getByTestId("input-field")).toBeInTheDocument();
    });
});