import type {Meta, StoryObj} from '@storybook/react';
import {HelloWorld} from './HelloWorld';
import {storyOptions} from "../../../.storybook/storyOptions";
import {Module1Decorator} from "../../../.storybook/decorators/Module1Decorator";

const meta: Meta<typeof HelloWorld> = {
    title: 'Module1',
    component: HelloWorld,
    decorators: [Module1Decorator],
    ...storyOptions
};

export default meta;

type Story = StoryObj<typeof HelloWorld>;

export const preview: Story = {
    args: {
        language: 'nl'
    },
};
