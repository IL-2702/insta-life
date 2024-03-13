import type { Meta, StoryObj } from '@storybook/react'

// eslint-disable-next-line import/namespace
import { SignUp } from '../'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'link'],
    },
  },
  component: SignUp.widget,
  tags: ['autodocs'],
  title: 'Widgets/SignUp',
} satisfies Meta<typeof SignUp.widget>

export default meta
type Story = StoryObj<typeof SignUp.widget>

export const Defoult: Story = {}
