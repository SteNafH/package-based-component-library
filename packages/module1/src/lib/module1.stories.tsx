import type { Meta, StoryObj } from '@storybook/react';
import { Module1 } from './module1';

const meta: Meta<typeof Module1> = {
  component: Module1,
  title: 'Module1',
};
export default meta;
type Story = StoryObj<typeof Module1>;

export const Preview: Story = {
  args: {},
};
