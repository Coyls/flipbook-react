import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Flipbook} from './Flipbook';

export default {
  title: 'Flipbook',
  component: Flipbook,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flipbook>;

const Template: ComponentStory<typeof Flipbook> = (args) => <Flipbook {...args} />;


export const basic = Template.bind({});
basic.args = {};

