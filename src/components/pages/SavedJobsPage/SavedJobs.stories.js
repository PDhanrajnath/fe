import React from 'react';
import { Provider } from 'react-redux';
import SavedJobs from './SavedJobs';
import store from '../../../state/store';


export default {
    title: 'Pages/SavedJobsPage',
    component: SavedJobs,
};

const Template = (args) =><Provider store={store} ><SavedJobs {...args} /></Provider> ;

export const Primary = Template.bind({});
Primary.args = {

};

