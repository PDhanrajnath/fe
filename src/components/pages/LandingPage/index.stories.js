import React from 'react';
import { Provider } from 'react-redux';
import LandingPage from './index';
import store from '../../../state/store';

export default {
    title: 'Pages/LandingPage',
    component: LandingPage,
};

const Template = (args) =><Provider store={store} ><LandingPage {...args} /></Provider> ;

export const Primary = Template.bind({});
Primary.args = {

};

