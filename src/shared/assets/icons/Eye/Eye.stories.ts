import { Meta, StoryObj } from '@storybook/react'

import { Eye } from './Eye'

const meta = {
  component: Eye,
  title: 'Icons/Eye',
} satisfies Meta<typeof Eye>

export default meta
type Story = StoryObj<typeof Eye>

export const Default: Story = {}
