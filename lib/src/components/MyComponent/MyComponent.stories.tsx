import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MyComponent, MyComponentProps } from './MyComponent';

export default {
  title: 'MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<MyComponentProps> = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello, World!',
};
