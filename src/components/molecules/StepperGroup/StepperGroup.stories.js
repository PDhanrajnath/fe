import React from 'react';
import StepperLabel from './StepperGroup';

export default {
    title: 'molecules/StepperGroup',
    component: StepperLabel,
};

const Template = (args) => <StepperLabel {...args} />;
 
export const Primary = Template.bind({});

Primary.args = {
    item1: true,
    item2: true,
    item3: true,
};
