import React from 'react';
import TabGroup from './TabGroup';

export default {
    title: 'molecules/TabGroup',
    component: TabGroup,
};

const Template = (args) => (<div style={{width:270}}><TabGroup {...args}  /></div>); 
 
export const Primary = Template.bind({});

Primary.args = {
    
};