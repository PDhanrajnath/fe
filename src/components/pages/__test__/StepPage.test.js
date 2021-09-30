import React from "react";
import { render, fireEvent, getByTestId, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPage from "../StepPage";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "../../../state/reducer/rootReducer";

const store = createStore(rootReducer);

global.fetch = jest.fn(() =>
  Promise.resolve()
);

describe("StepPage test", () => {  
  test("Test Step Page render", () => {
      const { getByTestId } = render(<Provider store={store}><SearchPage /></Provider>);
      expect(getByTestId("search-page")).toBeInTheDocument();
  });
  test('skip 1 on click', () => {
    const { getByText } = render(<Provider store={store}><SearchPage /></Provider>);
    const button = getByText('Skip');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const button2 = getByText('Skip');
    expect(button2).toBeInTheDocument();
    fireEvent.click(button2);
  });
  test('next change on click', () => {
    const { getByTestId, getByText } = render(<Provider store={store}><SearchPage /></Provider>);
    const input = getByTestId('input-field');
    expect(input).toBeInTheDocument();
    fireEvent.change(getByTestId("input-field").querySelector("input"), { target: { value: "Hyderabad, Telangana, India" } });
    fireEvent.click(screen.getByText("Hyderabad, Telangana, India"));
    const button = getByText('Skip');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const input2 = getByTestId('input-field');
    expect(input2).toBeInTheDocument();
    fireEvent.change(getByTestId("input-field").querySelector("input"), { target: { value: "Hyderabad, Telangana, India" } });
    fireEvent.click(screen.getByText("Hyderabad, Telangana, India"));
    const input3 = getByTestId('input-field');
    expect(input3).toBeInTheDocument();
    fireEvent.change(getByTestId("input-field").querySelector("input"), { target: { value: "Product Manager" } });
    fireEvent.keyDown(input3, { key: 'ArrowDown' });
    fireEvent.keyDown(input3, { key: 'Enter' });
  });
  test('next 1 on click', () => {
    const { getByText } = render(<Provider store={store}><SearchPage page={1} UserLocation="Hyderabad" /></Provider>);
    const button = getByText('Next');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const button2 = getByText('Next');
    expect(button2).toBeInTheDocument();
    fireEvent.click(button2);
  });
  test('skip 1 on click', () => {
    const { getByText } = render(<Provider store={store}><SearchPage /></Provider>);
    const button = getByText('Skip');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const button2 = getByText('Skip');
    expect(button2).toBeInTheDocument();
    fireEvent.click(button2);
    const button3 = getByText('Back');
    expect(button3).toBeInTheDocument();
    fireEvent.click(button3);
    const button4 = getByText('Back');
    expect(button4).toBeInTheDocument();
    fireEvent.click(button4);
  });
});