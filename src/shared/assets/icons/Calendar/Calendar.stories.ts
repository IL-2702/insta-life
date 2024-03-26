import { Calendar } from '@/shared/ui/Calendar/Calendar'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Calendar,
  title: 'Icons/Calendar',
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
