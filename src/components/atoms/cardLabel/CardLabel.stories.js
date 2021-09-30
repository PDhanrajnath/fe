import React from 'react';
import CardLabel  from './CardLabel';
import theme from '../../../utils/theme/theme';
import { ThemeProvider } from '@material-ui/core';

export default {
    title: 'atoms/CardLabel',
    component: CardLabel,
  };

  const Template = (args) => <ThemeProvider theme={theme}><CardLabel {...args} /></ThemeProvider>;


export const primary = Template.bind({});
primary.args = {
  label: 'User Experience Designer',
  isPrimary : true,
};

export const other = Template.bind({});
other.args = {
  label: 'Hyderabad, Telangana, India.',
};
