import type { Meta, StoryObj } from '@storybook/react'

import { SelectComponent } from './Select'

const meta = {
  argTypes: {
    optionTextVariant: {
      control: { type: 'radio' },
      options: [
        'bold-small',
        'bold14',
        'bold16',
        'error',
        'h1',
        'h2',
        'h3',
        'large',
        'link-small',
        'medium14',
        'regular-link',
        'regular14',
        'regular16',
        'small',
      ],
    },
  },
  component: SelectComponent,
  tags: ['autodocs'],
  title: 'Components/SelectComponent',
} satisfies Meta<typeof SelectComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
