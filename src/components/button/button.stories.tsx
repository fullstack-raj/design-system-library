import React from 'react';
import { Meta, Story } from '@storybook/react';

import  Button, {ButtonProps} from './button';

export default {
  title: 'components/Button',
  component: Button, 
} as Meta;
 
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
   chidren:'Default button',
};

 

export const Secondary = Template.bind({});
Secondary.args = {
  chidren:'Secondary button',
};

export const Large = Template.bind({});
Large.args = {
  chidren:'Large button',
};

export const Small = Template.bind({});
Small.args = {
  chidren:'Small button', 
}
