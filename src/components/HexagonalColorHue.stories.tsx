import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HexagonalColorHue from './HexagonalColorHue';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'HexagonalColorHue',
    component: HexagonalColorHue,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        border: { control: 'color' },
        highlight: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story, context) => {
            const { backgroundColor, ...props } = context.args;
            context.args = props;
            return (
                <div style={{ padding: 8, width: '100%', height: '100%', backgroundColor }}>
                    <Story />
                </div>
            );
        }
    ]
} as ComponentMeta<typeof HexagonalColorHue>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HexagonalColorHue> = (args) => <HexagonalColorHue {...args} />;

export const Primary = Template.bind({});
