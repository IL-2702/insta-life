import type { Meta, StoryObj } from '@storybook/react'

// eslint-disable-next-line import/namespace
import { SignUpConfirmation } from '../'

const meta = {
  component: SignUpConfirmation.widget,
  tags: ['autodocs'],
  title: 'Widgets/SignUpConfirmation',
} satisfies Meta<typeof SignUpConfirmation.widget>

export default meta
type Story = StoryObj<typeof SignUpConfirmation.widget>

export const Defoult: Story = {}
