import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TabItem from "../TabItem/TabItem";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

describe("TabItem test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <TabItem label="Dashboard" isClickable={true} icon={<DashboardOutlinedIcon />} />
      );
      expect(container).toMatchSnapshot();
    });
  
    test("Test inactive TabItem  render", () => {
      const { getByTestId } = render(<TabItem label="Dashboard" isClickable={false} icon={<DashboardOutlinedIcon />}/>);
      expect(getByTestId("tab-item")).toBeInTheDocument();
    });
  
    test("Test active TabItem render", () => {
      const { getByTestId } = render(<TabItem label="Dashboard" isClickable={true} icon={<DashboardOutlinedIcon />}/>);
      expect(getByTestId("tab-item")).toBeInTheDocument();
    });

    test('next 1 on click', () => {
      const { getByText } = render(<TabItem label="Dashboard" isClickable={false} icon={<DashboardOutlinedIcon />}/>);
      const button = getByText('Dashboard');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });
    
});