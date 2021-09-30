import React from 'react';
import CommuteRoutes from "./CommuteRoutes";

export default {
    title: 'Molecules/CommuteRoutes',
    component: CommuteRoutes
};

const Template = (args) => <CommuteRoutes {...args} />;

export const CommutesOne = Template.bind({});
CommutesOne.args = {
   icons : [{type : 'metro'},{type : 'bus'}],
   primary : true,
   isJobCard : true,
};

export const CommutesTwo = Template.bind({});
CommutesTwo.args = {
    icons : [{type : 'metro'},{type : 'bus'},{type : 'car'}],
    primary : false,
    isJobCard : true,
};

export const CommutesThree = Template.bind({});
CommutesThree.args = {
    icons : [{type : 'metro',selected: true},{type : 'bus'},{type : 'car'},{type : 'bike'}],
    primary : false,
    isJobCard : false,
};
