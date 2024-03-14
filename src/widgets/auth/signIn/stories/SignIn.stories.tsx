import type { Meta, StoryObj } from '@storybook/react'

// eslint-disable-next-line import/namespace
import { SignIn } from '../'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'link'],
    },
  },
  component: SignIn.widget,
  tags: ['autodocs'],
  title: 'Widgets/SignIn',
} satisfies Meta<typeof SignIn.widget>

export default meta
type Story = StoryObj<typeof SignIn.widget>

export const Defoult: Story = {}
