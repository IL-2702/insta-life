import { Meta, StoryObj } from '@storybook/react'

import { VisibilityOff } from './VisibilityOff'

const meta = {
  component: VisibilityOff,
  title: 'Icons/VisibilityOff',
} satisfies Meta<typeof VisibilityOff>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
