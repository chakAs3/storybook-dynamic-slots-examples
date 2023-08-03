import type { Meta, StoryObj } from '@storybook/vue3';

import MyComponent from './PrefixTag.vue';


const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/PrefixTagSuffix',
  component: MyComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrefixTag: Story = {
  args: {
    prefix: 'tag prefix',
    label: 'tag label', 
  },
};

export const SuffixTag: Story = {
  args: {
    label: 'tag label',
    suffix: 'tag suffix',
  },
};

export const PrefixSuffixTag: Story = {
  args: {
    prefix: 'tag prefix',
    label: 'tag label',
    suffix: 'tag suffix',
  },
};
